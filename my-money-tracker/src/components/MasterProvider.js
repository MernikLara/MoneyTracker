import MasterContext from '../contexts/MasterContext'
import React, { useState, useEffect, useContext, useCallback } from "react"
import axios from 'axios'
import moment from 'moment';
import { Prev } from 'react-bootstrap/esm/PageItem';


function MasterProvider ({ children }) {
    const [CategoryList, setCategoryList] = useState([]);
    const storedUserID = parseInt(sessionStorage.getItem('userID'));
    console.log(storedUserID)
    const storedEmail = sessionStorage.getItem('email');
    const storedName = sessionStorage.getItem('name');
    const storedSurname = sessionStorage.getItem('surname');
    const storedIsLoggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn'));
    const [IncomeList, setIncomeList] = useState([]);
    const [ExpenditureList, setExpenditureList] =  useState([]);
    const [Error, setError] = useState(null)
    const UserID = parseInt(sessionStorage.getItem("userID"))
    const [IncomeID, setIncomeID] = useState()
    const formattedDate = moment().format('YYYY-MM-DD');
    const categoryCount = useState(0)
    const Category = {
      name: String,
      userid: storedUserID,
      limita: Number,
      tip: Boolean,
      transactions: []
    }

  
    useEffect(() => {
      fetch(`http://localhost:8080/api/v1/kategorija/getbyuserid/${storedUserID}`)
      .then((res) => {
          return res.json();
      })
      .then(async (data) => {
          if (Array.isArray(data)) {
              for (let category of data) {
                  const rez = await axios.get(`http://localhost:8080/api/v1/kategorija/vsiprihodi/${category.id}`);
                  if (rez.status === 200) {
                      category.transactions = rez.data; 
                      console.log(category.id)
                  }
              }
              updateCList(data);
              categoryCount++
          } else {
              console.warn('Received non-array data:', data);
          }
      })
      .catch((error) => {
          console.error("Error fetching transaction data:", error);
      });
    }, [storedUserID]);
    

    
    const updateCList = (newCList) => {
        setCategoryList(newCList);
    };



    const addCategory = async (name, limita, tip) => {
      console.log('addCategory function called with:', name, limita, tip, storedUserID);
        try {
          const newCategory = {
            name: name,
            userid: storedUserID,
            limita: limita,
            tip: tip,
            transactions: []
          }
          const response = await axios.post('http://localhost:8080/api/v1/kategorija/add',  newCategory );
          if (response.status === 200) {
            
            console.log(response);
            console.log(newCategory)
            console.log(CategoryList)
            setCategoryList(CategoryList => [...CategoryList, newCategory]);;
            categoryCount++
          }
        } catch (error) {
          console.error("error adding Category", error);
        }
      };



      useEffect(() => {
        const getIncomes = async () => {
            try {
                const res = await fetch(`http://localhost:8080/api/v1/prihod/userid/${UserID}`)
                if (!res.ok) {
                    throw new Error('could not fetch data')
                }
                const data = await res.json();
                console.log(data)
                setIncomeList(data)
            } catch (error) {
                setError(error.message);
            }
        };
        getIncomes();
        }, [UserID])



    useEffect(() => {
        const getExpenditures = async () =>{
            	try{
                    const response = await fetch(`http://localhost:8080/api/v1/odhod/userid/${UserID}`)
                    if (!response.ok) {
                        throw new Error('could not fetch data')
                    }
                    const data = await response.json();
                    console.log(data)
                    setExpenditureList(data)

                } catch (error) {
                    setError(error.message);
                }
            };
            getExpenditures();
        }, [UserID])



        const addIncome = useCallback(async (name, kategorijaid, value) => {
            console.log("function called")
            const Income = {
                date: formattedDate,
                kategorijaidprihod: kategorijaid,
                name: name,
                useridprihod: UserID,
                value: value,
            };
            setIncomeList(prevIncomeList => [...prevIncomeList, Income])
            updateIList(IncomeList)
            console.log("NIER", kategorijaid, Income.kategorijaidprihod)
            
            try {
                
                const response = await axios.post('http://localhost:8080/api/v1/prihod', Income ,{  headers: {
                    'Content-Type': 'application/json'
                }});
                console.log(response.data);
        
                if (response.status === 200) {
                    console.log('Income added Successfully');
                    const newIncomeID = response.data;
                    console.log(response.data.id)
                    const res = await axios.post(`http://localhost:8080/api/v1/kategorija/addprihod/${Income.kategorijaidprihod}/${newIncomeID}`, { kategorijaid: Income.kategorijaidprihod, id: newIncomeID });
                    console.log('PrihodID' + newIncomeID)
                    console.log(res.data);
                    if (res.status === 200) {
                        console.log('Income added successfully to category');
                    }
                }
            } catch (err) {
                console.error('Error adding Income', err);
            }
        }, [UserID]);



            const addExpenditure = useCallback(async( name, kategorijaid, value) =>{
                const Expenditure = {
                    name: name,
                    kategorijaidodhod: kategorijaid,
                    date: formattedDate,
                    useridodhod: UserID,
                    value: value,
                }
                setExpenditureList(prevExpenditureList => [...prevExpenditureList, Expenditure])
                updateEList(ExpenditureList)
                console.log("KategorijaID Odhod:" + Expenditure.kategorijaidodhod)
                try {
                    const response = await axios.post('http://localhost:8080/api/v1/odhod', Expenditure);
                    console.log(response.data);
            
                    if (response.status === 200) {
                        console.log('Expenditure added Successfully');
                        const newExpenditureID = response.data
                        console.log('OdhodID' + newExpenditureID)
                        const res = await axios.post(`/addprihod/${Expenditure.kategorijaidodhod}/${Expenditure.id}`, { kategorijaid: Expenditure.kategorijaidodhod, id: newExpenditureID });
                        console.log(Expenditure.id)
                        console.log(res.data);

                        if (res.status === 200) {
                            console.log('Expenditure added successfully to category');
                        }
                    }
                } catch (error) {
                    console.error('Error adding Expenditure', error);
                }
            }, [UserID]);

         /*       const providePrihodi = async( kategorijaid ) => {
                    try{

                        const responser = await axios.get(`http://localhost:8080/api/v1/kategorija/vsiprihodi/${kategorijaid}`)
                        console.log(responser)
                        return responser.data
                    }
                    catch (error) {
                        console.log("problem with getting transactions", error)
                    }
                }

          const provideOdhodi = async( kategorijaid ) => {
              try{

               const responser = await axios.get(`http://localhost:8080/api/v1/kategorija/vsiodhodi/${kategorijaid}`)
               console.log(responser.data)
               return responser.data
                        
                        
             }
              catch (error) {
                        console.error("problem with getting transactions", error)
            }
         };

         const shapePrihodi = async (prihodid) => {
            try{
                const response = await axios.get(`http://localhost:8080/api/v1/prihod/${prihodid}`);
                return response.data;

            } catch {
                console.log("Error fetching prihod details", error)
            }


         }


         const getSpecificPrihodi = async (kategorijaid) => {
            const prihodIDArray = await providePrihodi(kategorijaid)

            const prihodArray = await Promise.all(prihodIDArray.map(async (prihodID) => {
                return await shapePrihodi(prihodID)
            }))

            console.log(prihodArray)
         }*/

  



                



    const updateIList = (newTList) => {
        setIncomeList(newTList);
    };
    const updateEList = (newEList) => {
        setExpenditureList(newEList)
    }

    

    return (
        <MasterContext.Provider value={{CategoryList , setCategoryList, addCategory, updateCList, IncomeList, ExpenditureList, addIncome, addExpenditure, updateEList, updateIList }}>
            {children}
        </MasterContext.Provider>
    )

}

export default MasterProvider 
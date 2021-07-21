import React, { useEffect } from 'react';
import { getPurchaseGoals } from '../apiclient/wizardFetch';
import _Head from 'next/head';
import expenseSchema from '../models/expenseSchema';

export function purchaseGoal() {

  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const data = getPurchaseGoals();
    setGoals(data);
  }, []);

    return (
    <div>
    <div className="purchaseGoalSection">
        <p className="purchaseGoalP">{goal.purchaseName}</p>
        <p className="purchaseGoalCost">$35k</p>
    </div>
    </div>
    );
  }


/* const List = () => {
    const [goals, setGoals] = useState([])
    useEffect(() => {
      const data = await callApiToGetData()
      setGoals(data)
    }, [])
    return(
      {goals.map(item => <Li item={item} />)}
    )
  }

  const Li = ({item}) => {
    return(
      <diV>{item}</diV>
    )
  } */
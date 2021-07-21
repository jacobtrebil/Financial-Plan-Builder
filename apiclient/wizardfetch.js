export const createPlan = async (plan) => {
  const response = await fetch("/api/wizardPostApi", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plan),
  });
  return await response.json();
};

export const updatePlan = async (id, plan) => {
  const response = await fetch(`/api/wizardPutApi/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plan),
  });
  return await response.json();
};

export const updatePlan2 = async (id, plan) => {
  const response = await fetch(`/api/wizardPutApi2/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plan),
  });
  return await response.json();
};

export const planCalculations = async (id, plan) => {
  const response = await fetch(`/api/wizardCalculations/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plan),
  });
  return await response.json();
};

export const updateCurrentSavings = async (
  id,
  plan,
  enableCalculation = false
) => {
  const response = await fetch(`/api/updateCurrentSavings/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ plan, enableCalculation }),
  });
  return await response.json();
};

export const updateRiskScore = async (id, plan) => {
  const response = await fetch(`/api/updateRiskScore/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plan),
  });
  return await response.json();
};

export const updateRetirementAge = async (id, plan) => {
  const response = await fetch(`/api/updateRetirementAge/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plan),
  });
  return await response.json();
};

export const updatePartTimeWork = async (id, plan) => {
  const response = await fetch(`/api/updatePartTimeWork/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plan),
  });
  return await response.json();
};

export const updateSocialSecurity = async (id, plan) => {
  const response = await fetch(`/api/updateSocialSecurity/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plan),
  });
  return await response.json();
};

export const updatePension = async (id, plan) => {
  const response = await fetch(`/api/updatePension/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plan),
  });
  return await response.json();
};

export const updateLivingExpense = async (id, plan) => {
  const response = await fetch(`/api/updateLivingExpense/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plan),
  });
  return await response.json();
};

export const addScenario = async (id, plan) => {
  const response = await fetch(`/api/addNewScenario/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plan),
  });
  return await response.json();
};

export const addExpense = async (id, _expense) => {
  const response = await fetch(`/api/addExpense/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_expense),
  });
  return await response.json();
};

export const getPurchaseGoals = async (id) => {
  const response = await fetch(`/api/getPurchaseGoals/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  });
  return await response.json();
};

export const updatePlanCalculations = async (id, plan) => {
  const response = await fetch(`/api/updatePlanCalculations/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plan),
  });
  return await response.json();
};

/* Consolidate the code using something like this: 
  const sendRequest = async (url, method, body) => fetch(url, {
  method,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body ? body: JSON.stringify(body): null
})

export const updatePlan2 = async (id, plan) => await sendRequest(`/api/wizardapi2/${id}`, 'PUT', plan)

export const planCalculations = async (id, plan) => await sendRequest(`/api/wizardcalculations/${id}`, 'POST', plan)

..etc */

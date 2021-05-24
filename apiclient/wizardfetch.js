export const createPlan = async (plan) => {
    const response = await fetch('/api/wizardpostapi', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(plan)
    })
    return await response.json();
  }
  
  export const updatePlan = async (id, plan) => {
    const response = await fetch(`/api/wizardputapi/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(plan)
    })
    return await response.json();
  }

  export const updatePlan2 = async (id, plan) => {
    const response = await fetch(`/api/wizardputapi2/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(plan)
    })
    return await response.json();
  }

  export const planCalculations = async (id, plan) => {
    const response = await fetch(`/api/wizardcalculations/${id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(plan)
    })
    return await response.json();
  }

  export const planDecisions = async (id, plan) => {
    const response = await fetch(`/api/wizardputapi3/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(plan)
    })
    return await response.json();
  }



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
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

  export const addSocialSecurity = async (id, plan) => {
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
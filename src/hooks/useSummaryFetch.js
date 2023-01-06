import React, { useCallback, useState } from 'react'

const useSummaryFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const fetchWithoutCache = useCallback(async (endpoint, params) => {
    request(async () => {
        const result = await console.log('Making a fake fetch');
        return result;
    })
  })
  
  const request = useCallback(async (promise) => {
    try {
        setLoading(true)
        const result = await promise()
        return result;
    } catch (error) {
        console.log(error)
        return null;
    } finally {
        setLoading(false);
    }
  }, [setError])
  return {
    loading, request
  }
}

export default useSummaryFetch
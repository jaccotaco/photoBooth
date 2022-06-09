import React, {useEffect, useState} from 'react'

function useFetch(url) {
    const [searchData, setSearchData] = useState(null)
    const [result, setResult] = useState(null)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url, {
            method: 'GET', headers: {
                Accept: 'application/json', 'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((e) => {
                setError(e)
            }).finally(() => {
            setLoading(false)
        })
    }, [url])

    const refetch = (random: string) => {
        setLoading(true)
        fetch(`https://api.openbrewerydb.org/breweries?page=${random}&per_page=3x`, {
            method: 'GET',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((e) => {
                setError(e)
            }).finally(() => {
            setLoading(false)
        })
    }
    const autoCompleteSearch = (word: string) => {
        setLoading(true)
        fetch(`https://api.openbrewerydb.org/breweries/autocomplete?query=${word}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => setSearchData(data))
            .catch((e) => {
                setError(e)
            }).finally(() => {
            setLoading(false)
        })
    }

    const getByName = (name: string) => {
        setLoading(true)
        fetch(`https://api.openbrewerydb.org/breweries?by_name=${name.split(' ').join('_')}&per_page=3`, {
            method: 'GET',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                data.map(item => setResult({
                        name: item?.name,
                        street: item?.street,
                        city: item?.city,
                        website: item?.website_url,
                        longitude: item?.longitude,
                        latitude: item?.latitude
                    }
                ))
            })
            .catch((e) => {
                setError(e)
            }).finally(() => {
            setLoading(false)
        })
    }

    return {result, searchData, data, loading, error, refetch, autoCompleteSearch, getByName}
}

export default useFetch

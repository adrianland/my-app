import React, { useState, useEffect } from 'react';
import '../src/components/pokemon/Pokemon.css'
import { FaSearch } from 'react-icons/fa'
import Spinner from './components/pokemon/Spinner';
import './components/pokemon/Spinner.css'
import axios from 'axios'

export default function Pokemon() {

  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(false)

  const initLoad = () => {
    setLoading(true)
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=5')
      .then(resp => {
        console.log(resp)
        setLoading(false)
        for (let i = 0; i < resp.data.results.length; i++) {
          axios.get(resp.data.results[i].url)
            .then(result => {
              setPokemon(prevArray => [...prevArray, result.data])
            })
        }
      }
      )
  }

  const filterSelect = (count) => {
    setLoading(true)
    setPokemon([])
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${count}/`)
      .then(resp => {
        console.log(resp)
        setLoading(false)
        for (let i = 0; i < resp.data.results.length; i++) {
          axios.get(resp.data.results[i].url)
            .then(result => {
              setPokemon(prevArray => [...prevArray, result.data])
            })
        }

      })
  }

  function filterSearch(nameOrId) {
    setLoading(true)
    setPokemon([])
    nameOrId.preventDefault();
    const value = nameOrId.target[1].value
    console.log(nameOrId)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${value}/`)
      .then(resp => {
        setLoading(false)
        console.log(resp)
        axios.get(resp.data.forms[0].url)
          .then(result => {
            setPokemon(prevArray => [...prevArray, result.data])
          })

      })
  }

  useEffect(initLoad, [])

  return (
    <div className='pokemon'>
      <div className="topnav">

        <div className="search-container">

          <form className='filter' onSubmit={filterSearch}>
            <div className="content-select">
              <select onChange={(e) => {
                filterSelect(e.target.value);
              }}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <input type="text" placeholder="id or name" name="search" />
            <button><FaSearch /></button>

          </form>
        </div>
      </div>

      <div className='containerPokemon'>
        {loading == false ?
          pokemon.map((pokemon, index) => (
            <div className="cardPokemon" key={index}>
              <img src={pokemon.sprites.front_default} />
              <div>
                <h4><b>{pokemon.name}</b></h4>
              </div>
            </div>
          ))
          : <div className="pos-center">
            <Spinner />
          </div>}
      </div>

    </div>
  )
}

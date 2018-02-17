import React from 'react'

export default class Search extends React.Component {
  state = {
    error: undefined
  }

  handleQuery = (e) => {
    e.preventDefault()

    const text = e.target.elements.query.value.trim()
    const error = this.props.handleQuery(text)

    this.setState(() => ({error}))

    if (!error) {
      console.log('Buscar no servidor', text)
    }
  }

  render() {
    return (
      <div>
        <form className='search' onSubmit={this.handleQuery}>
          <input className='search__input' type='text' name='query' />
          <button className='search__button'>pesquisar</button>
        </form>
      </div>
    )
  }
}
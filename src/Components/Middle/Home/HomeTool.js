import React, { Component } from 'react'

export default class HomeTool extends Component {

    constructor(props) {
        super(props)

        this.state = {
            movieSearchText:'',
            value: {}
        }
    }

    movieChange = (event) => {
        this.setState({ value: event.target.value });
    }
    
    setSearchText = (event)=>{
        this.setState({
            movieSearchText: event.target.value
        })
    }

    render() {
        //console.log(this.props.listMovies)
        // let listElement = this.props.listMovies.map((e, index) => {
        //     return <option key={index} value={e.Id} >{e.Name}</option>
        // })
        return (
            <section className="section mt-5 bg-light pb-0">
                <div className="container">
                    <div className="row check-availabilty" id="next">
                        <div className="block-32" data-aos="fade-up" data-aos-offset={-200}>
                            <form action={`/search/${this.state.movieSearchText}`}>
                                <div className="row">

                                    <input className="col-md-10 mb-3 mb-lg-0 px-5" type="text" placeholder="Nhập tên phim...." 
                                    onChange={this.setSearchText.bind(this)}/>

                                    <div className="col-md-2  align-self-end">
                                        <button className="btn btn-primary btn-block text-white">Tìm kiếm</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

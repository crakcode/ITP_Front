import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import { getCompanyByLocation, getCompanyByName, getCompanyList } from '../../../lib/company';
import { Button, TableBody, TableCell, TableRow, TextField } from '@material-ui/core'
import "./styles.css";

export default class NewPaging extends Component {
  constructor(props) {
      super(props);
      this.state = {
          offset: 0,
          perPage: 5,
          currentPage: 0,
          condition: 'location',
          keyword:'',
          companys:[],
      };
  }
  handleCondition=(e)=> {
    this.setState({condition: e.target.value});
  }
  handleKeyword=(e)=>{
    this.setState({keyword: e.target.value});
  }
  dosearch=async(e)=> {
    const {condition,keyword}=this.state;
    console.log(condition);
    if (condition=='location'){
      const {data}= await getCompanyByLocation(keyword);
      const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
      const companyData = slice.map(row =>
        <TableBody>
        <TableRow key={row.companyId} onClick={()=>this.handleView(row)}>
            <TableCell component="th" scope="row">{row.companyId}</TableCell>
            <TableCell component="th" scope="row">{row.companyName}</TableCell>
            <TableCell align="right">{row.companyLocation}</TableCell>
            <TableCell align="right">{row.companyTel}</TableCell>
        </TableRow>
        </TableBody>
    )
    this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        companyData
    })


    }else{
      const {data}= await getCompanyByName(keyword);
      this.setState({companys: data});
      console.log(this.state.companys);
    }

  }
  handleList=async()=>{
    let {data}=await getCompanyList();
    const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
    const companyData = slice.map(row =>
        <TableBody>
        <TableRow key={row.companyId} onClick={()=>this.handleView(row)}>
            <TableCell component="th" scope="row">{row.companyId}</TableCell>
            <TableCell component="th" scope="row">{row.companyName}</TableCell>
            <TableCell align="right">{row.companyLocation}</TableCell>
            <TableCell align="right">{row.companyTel}</TableCell>
        </TableRow>
        </TableBody>
    )
    console.log(companyData);

    this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        companyData
    })

}
    handleView=(e)=>{
        console.log(e)
    }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.handleList()
    });

};
  componentDidMount() {
      this.handleList()
  }
  render() {
      return (
          <div>
              <br/>
              <br/>
              <br/>
              <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.condition} onChange={this.handleCondition}>
              <option value="location">지역</option>
              <option value="name">상호명</option>
            </select>
            <TextField
                variant="standard"
                margin="normal"
                fullWidth
                required
                name="text"
                onChange={this.handleKeyword}
              />

          </label>
          <Button
                margin="normal"
                fullWidth
                required
                variant="contained"
                color="primary"
                onClick={() => {
                  this.dosearch();
                }}
              >
                검색
          </Button> 

        </form>

            {this.state.companyData}
              <ReactPaginate
                  previousLabel={"이전"}
                  nextLabel={"다음"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>

          </div>

      )
  }
}

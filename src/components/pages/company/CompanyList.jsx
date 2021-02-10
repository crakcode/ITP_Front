import { Button, TableBody, TableCell, TableRow, TextField } from '@material-ui/core'
import { addCommunity, getCommunityById, getCommunitys } from '../../../lib/community';
import React from 'react';
import {getCompanyByDynamic,getCompanyByName, getCompanyList ,getCompanyByLocation} from '../../../lib/company';
import "./styles.css";
import ReactPaginate from 'react-paginate';

class CompanyList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            perPage: 5,
            currentPage: 0,
            companys:[]
        };
    }
    componentDidMount() {
        this.handleList()
    }

    handleView=(e)=>{
        console.log(e)
    }

    goSearchPage=()=>{
        console.log("hell;owrold");
        const search=0;
        this.props.history.push(`/company/${search}`);
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
    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <Button
                margin="normal"
                
                required
                variant="contained"
                color="primary"
                onClick={() => {
                  this.goSearchPage();
                }}
              >
                검색
          </Button>                 <br/>
          <br/>

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


export default CompanyList;
import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import { getCompanyByLocation, getCompanyByName, getCompanyList } from '../../../lib/company';
import { Grid,Paper,Button, TableBody, TableCell, TableRow, TextField } from '@material-ui/core'
import "./styles.css";
import { withStyles } from '@material-ui/core/styles';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";


const styles = {
  paper: {
      width: `750px`,
      textAlign: 'center',
    },

  formControl: {
      minWidth: 120,
    },
    searchControl:{
      width:400
    }
  
  
};

 class CompanySearchList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          offset: 0,
          perPage: 15,
          currentPage: 0,
          condition: 'location',
          keyword:'',
          companys:[],
      };
  }


  handleView=(e)=>{
    console.log(e);
    console.log(e.companyId);
    let id=e.companyName;
    this.props.history.push(`/company/${id}`);

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
    const { classes } = this.props;

      return (
          <div>
              <br/>
              <br/>
              <br/>



  <form onSubmit={this.handleSubmit}>
    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">검색조건</InputLabel>
        <Select value={this.state.condition} onChange={this.handleCondition}
          label="Age"
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value="location">지역</MenuItem>
          <MenuItem value="name">회사명</MenuItem>
        </Select>
      </FormControl>
            <TextField
                variant="standard"
                margin="normal"
                className={classes.searchControl}
                required
                name="text"
                onChange={this.handleKeyword}
              />

          <Button
                margin="normal"
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
        <Paper className={classes.paper} >
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
          </Paper>
          </div>

      )
  }
}

export default withStyles(styles)(CompanySearchList);
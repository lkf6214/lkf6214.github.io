import React from 'react'

export default function Search() {
    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
      }
      constructor(props) {
        super(props);
        this.state = {
          customers: '',
          completed: 0,
          searchKeyword: ''
        }
        this.stateRefresh = this.stateRefresh.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this)
      }

      const filteredComponents = (data) => {
        data = data.filter((c) => {
            return c.name.indexOf(this.state.searchKeyword) > -1;
        });
        return data.map((c) => {
          return <Customer stateRefresh={this.stateRefresh} key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
        });
      }

      stateRefresh() {
        this.setState({
          customers: '',
          completed: 0,
          searchKeyword: ''
        });
        this.callApi()
          .then(res => this.setState({customers: res}))
          .catch(err => console.log(err));
      }
    return (

    <>
    
     <InputBase
                placeholder="검색하기"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                name="searchKeyword"
                value={this.state.searchKeyword}
                onChange={this.handleValueChange}
              />
    <TableBody>
              {this.state.customers ?
                filteredComponents(this.state.customers) :
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
                  </TableCell>
                </TableRow>
              }
            </TableBody>
    
    </>
    
  )
}

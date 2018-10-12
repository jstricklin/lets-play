import './card'

class PlayerTwo extends Component {
    render() {
        return (
          <div>
            <BootstrapTable data={this.props.data}>
              <TableHeaderColumn isKey dataField='id'>
                ID
              </TableHeaderColumn>
              <TableHeaderColumn dataField='name'>
                Name
              </TableHeaderColumn>
              <TableHeaderColumn dataField='value'>
                Value
              </TableHeaderColumn>
            </BootstrapTable>
          </div>
        );
    }
}
export default PlayerTwo
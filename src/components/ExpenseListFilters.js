import React from 'react';
import moment from 'moment';
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/Filters'



export class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calenderFocused: null,
      filterText: '',
      filterSortBy: '',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month'),
    };
    //this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }
  // onDatesChange ({ startDate, endDate }) {
  //   this.props.dispatch(setStartDate(startDate));
  //   this.props.dispatch(setEndDate(endDate));
  // }
  onFocusChange (calenderFocused) {
    this.setState(() => ({ calenderFocused }));
  }
  render() {
   return (
  <div>
    <input type="text" 
      value={this.state.filterText}
      onChange={(e) => {
        const sT = e.target.value;
        this.setState(() => ({ filterText: sT}))
        this.props.setTextFilter(sT);
      }}
    />
    <select 
      value={this.state.filterSortBy} 
      onChange={(e) => {
        const sortVal = e.target.value;
        this.setState(() => ({ filterSortBy: sortVal}))
        if (sortVal === 'date') {
          this.props.sortByDate();
        }
        else if (sortVal === 'amount') {
          this.props.sortByAmount();
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
   
    <DateRangePicker
      startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
      //startDateId={Math.floor((1 + Math.random() * 0x10000)).toString(16).substring(1)} // PropTypes.string.isRequired,
      startDateId={String(this.props.filters.startDate)}
      endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
      //endDateId={Math.floor((1 + Math.random() * 0x10000)).toString(16).substring(1)} // PropTypes.string.isRequired,
      endDateId={String(this.props.filters.endDate)}
      onDatesChange={({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
        } // PropTypes.func.isRequired,
      } 
      focusedInput={this.state.calenderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={calenderFocused => this.setState({ calenderFocused })} // PropTypes.func.isRequired,
      numberOfMonths={1}
      showDefaultInputIcon={true}
      showClearDates={true}
    />
  </div>
    );
  }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (startDate) => dispatch(setStartDate(starteDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate())
})
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

{/* <DateRangePicker 
startDate={this.props.filters.startDate}
endDate={this.props.filters.endDate}
focusedInput={this.state.calenderFocused}
onFocusChange={this.onFocusChange}
showClearDates={true}
numberOfMonths={1}
isOutsideRange={() => false}      
/> */}
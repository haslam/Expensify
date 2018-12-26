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
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
  }
  onTextChange (e) {
    const sT = e.target.value;
    this.setState(() => ({ filterText: sT}))
    this.props.setTextFilter(sT);
  }
  onSortChange(e) {
    const sortVal = e.target.value;
    this.setState(() => ({ filterSortBy: sortVal}))
    if (sortVal === 'date') {
      this.props.sortByDate();
    }
    else if (sortVal === 'amount') {
      this.props.sortByAmount();
    }
  }
  onDatesChange ({ startDate, endDate }) {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }
  onFocusChange (calenderFocused) {
    this.setState(() => ({ calenderFocused }));
  }

  render() {
   return (
  <div className="content-container">
  <div className="input-group">
    <div className="input-group__item">
      <input type="text" 
        value={this.state.filterText}
        onChange={this.onTextChange}
        className="text-input"
        placeholder="Search expenses"
      />
    </div>
    <div className="input-group__item">
      <select 
        value={this.state.filterSortBy} 
        onChange={this.onSortChange}
        className="select"
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
    <div className="input-group__item">
      <DateRangePicker
        startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
        //startDateId={Math.floor((1 + Math.random() * 0x10000)).toString(16).substring(1)} // PropTypes.string.isRequired,
        startDateId={String(this.props.filters.startDate)}
        endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
        //endDateId={Math.floor((1 + Math.random() * 0x10000)).toString(16).substring(1)} // PropTypes.string.isRequired,
        endDateId={String(this.props.filters.endDate)}
        onDatesChange={this.onDatesChange}
        //   this.props.setStartDate(startDate);
        //   this.props.setEndDate(endDate);
        //   } // PropTypes.func.isRequired,
        // } 
        focusedInput={this.state.calenderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={calenderFocused => this.setState({ calenderFocused })} // PropTypes.func.isRequired,
        numberOfMonths={1}
        showDefaultInputIcon={true}
        showClearDates={true}
      />
    </div>
  </div>
  </div>
    );
  }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch, props) => ({
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
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
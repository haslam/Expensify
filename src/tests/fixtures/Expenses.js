import moment from "moment";

//make test data
export default [{
  id: '1',
  description: 'Bill test',
  note: '',
  amount: 190,
  createdAt: 0
},
{
  id: '2',
  description: 'Water test',
  note: '',
  amount: 1850,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
  id: '3',
  description: 'Rent',
  note: '',
  amount: 11950,
  createdAt: moment(0).add(4, 'days').valueOf()
}
]
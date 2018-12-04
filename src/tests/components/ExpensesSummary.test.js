import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummaries";

test('should correctly render expenses summary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary 
    expenseCount={1} 
    expensesTotal={2343} 
    />
  )
  expect(wrapper).toMatchSnapshot();
})

test('should correctly render expenses summary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary 
    expenseCount={4} 
    expensesTotal={1994563} 
    />
  )
  expect(wrapper).toMatchSnapshot();
})
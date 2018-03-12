import React from 'react';
import {configure, shallow} from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import ProgressBarFun from './ProgressBarFun';

configure({ adapter: new ReactSixteenAdapter() })

const propVals = {
    "buttons": [
                    10,
                    38,
                    -13,
                    -18
                ],
    "bars": [
        62,
        45,
        62
    ],
    "limit": 230
  }

// const { loadDomainList, loadDomainListWithCriteria, loadLookupData, loadListAndLinks2 } = require.requireMock('sms_comp/lib/remote/remoteCall');
/*
jest.mock('./ProgressBarFun', () => {
  return {  loadDomainList: jest.fn(),
            loadDomainListWithCriteria: jest.fn(),
            loadLookupData: jest.fn(),
            loadListAndLinks2: jest.fn()
          };
});*/

describe("ProgressBarFun", () => {
  // All tests will go here
  beforeEach(()=>{

  })
   it('check props passed in are correct', () => {
      const wrapper = enzyme.shallow(<ProgressBarFun bars={propVals.bars} buttons={propVals.buttons} limit={propVals.limit} />);
      expect(wrapper.state().bars).toEqual(propVals.bars);
      expect(wrapper.state().buttons).toEqual(propVals.buttons);
      expect(wrapper.state().limit).toEqual(propVals.limit);
   });

/*
  it("always renders a div", () => {
    console.table(modelPath);
    const wrapper = shallow(<CourseList />);
    expect(wrapper.state().linkView).toEqual('/viewCourse');
  });*/
});

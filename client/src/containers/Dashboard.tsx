import * as React from 'react';
import Sidebar from './../components/Sidebar/Sidebar';
import './Dashboard.css';

class Dashboard extends React.PureComponent<any, any> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  public toggleSidebar = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  public render() {
    const { isOpen } = this.state;
    return (
      <div className="dashboard">
        <button onClick={this.toggleSidebar}>Toggle Sidebar</button>
        <Sidebar isOpen={isOpen} />
      </div>
    );
  }
}

export default Dashboard;
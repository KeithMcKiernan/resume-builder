import axios from 'axios';
import * as classnames from 'classnames';
import * as React from 'react';
import './Sidebar.css';

interface ISidebar {
  isOpen?: boolean;
}

class Sidebar extends React.PureComponent<ISidebar, {}> {

  constructor(props: ISidebar) {
    super(props);
  }

  public async getRepos() {
    // tslint:disable-next-line:no-console
    console.log(await axios.get('https://api.github.com/users/KeithMcKiernan/repos'));
  }

  public get sidebarClasses() {
    const { isOpen } = this.props;
    return classnames('sidebar', {
      'collapsed': !isOpen,
      'expanded': isOpen,
    });
  }

  public render() {
    return (
      <nav className={this.sidebarClasses}>
        <div className="sidebar-nav">
          <ul>
            <li>Dashboard</li>
            <li>Resume Builder</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Sidebar;

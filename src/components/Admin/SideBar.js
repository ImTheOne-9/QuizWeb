
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
} from 'react-pro-sidebar';

import { FaTachometerAlt, FaGem, FaRegLaughWink, FaGithub } from 'react-icons/fa';
import { SiSemanticuireact } from "react-icons/si";
import "./SideBar.scss";
import { Link } from 'react-router-dom';
// import sidebarBg from '../../assets/bg2.jpg';

const SideBar = (props) => {
    const { collapsed, toggled, handleToggleSidebar } = props;

    return (
        <>
            <Sidebar className='pro-sidebar'
                backgroundColor="#fff"
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onBackdropClick={handleToggleSidebar}
            >
                {/* Header */}
                <div
                    style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    <SiSemanticuireact size={'3em'} color={'00bfff'} />
                    Hoi Dan IT
                </div>

                {/* Sidebar Content */}
                <Menu>
                    <MenuItem
                        component={<Link to={"/admins"} />}
                        icon={<FaTachometerAlt />}>
                        Dashboard
                    </MenuItem>
                    <MenuItem icon={<FaGem />}>Components</MenuItem>

                    <SubMenu icon={<FaRegLaughWink />} label="Danh mục">
                        <MenuItem component={<Link to={"/admins/manage-users"} />}>User</MenuItem>
                        <MenuItem>Quiz</MenuItem>
                        <MenuItem>Quest</MenuItem>
                    </SubMenu>
                </Menu>

                {/* Footer */}
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <FaGithub />
                        <span style={{ marginLeft: '5px' }}>View Source</span>
                    </a>
                </div>
            </Sidebar>
        </>
    );
};

export default SideBar;

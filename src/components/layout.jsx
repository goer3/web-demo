import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FundOutlined,
  DesktopOutlined,
  AlertOutlined,
  BorderlessTableOutlined,
  AudioMutedOutlined,
  ExceptionOutlined,
  FieldTimeOutlined,
  MailOutlined,
  AppstoreAddOutlined,
  SnippetsOutlined,
  HddOutlined,
  UsergroupAddOutlined,
  CalendarOutlined,
  ClusterOutlined,
  CommentOutlined,
  SolutionOutlined,
  SlidersOutlined,
  IdcardOutlined,
  SisternodeOutlined,
  ApiOutlined,
  AuditOutlined,
  SettingOutlined,
  CreditCardOutlined,
  QuestionCircleOutlined,
  GithubOutlined,
  MoreOutlined,
  WarningTwoTone,
  CheckOutlined,
  LogoutOutlined,
  HeartTwoTone,
  BgColorsOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, Badge, ConfigProvider, Avatar, Dropdown, Space } from 'antd';
import { LogoWhite, LogoBlack, LogoCollapsed, DefaultAvatar } from '@/components/image';
import { GenerateGenderBadge } from '@/components/badge';

const { Header, Sider, Content, Footer } = Layout;

// 自定义主题
let customTheme = localStorage.getItem('customTheme') || 'dark';

// 菜单配置
const menuItems = [
  {
    key: 'group1',
    label: '系统功能',
    type: 'group',
    children: [
      {
        key: '/dashboard',
        label: '工作空间',
        icon: <DesktopOutlined />
      },
      {
        key: '/query',
        label: '数据查询',
        icon: <FundOutlined />
      },
      {
        key: '/datasource',
        label: '数据来源',
        icon: <HddOutlined />
      },
      {
        key: '/alarm',
        label: '监控告警',
        icon: <AlertOutlined />,
        children: [
          { key: '/alarm/events', label: '告警事件', icon: <ExceptionOutlined /> },
          { key: '/alarm/rules', label: '告警策略', icon: <BorderlessTableOutlined /> },
          { key: '/alarm/shielding', label: '屏蔽策略', icon: <AudioMutedOutlined /> },
          {
            key: '/alarm/history',
            label: '告警历史',
            icon: <FieldTimeOutlined />,
            children: [
              {
                key: '/alarm/history/todo',
                label: '等待处理',
                icon: <WarningTwoTone twoToneColor="#eb2f96" />
              },
              { key: '/alarm/history/finish', label: '完成处理', icon: <CheckOutlined /> }
            ]
          }
        ]
      },
      {
        key: '/message',
        label: '消息通知',
        icon: <MailOutlined />,
        children: [
          { key: '/message/type', label: '告警媒介', icon: <AppstoreAddOutlined /> },
          { key: '/message/template', label: '通知模板', icon: <SnippetsOutlined /> }
        ]
      },
      {
        key: '/user',
        label: '人员组织',
        icon: <UsergroupAddOutlined />,
        children: [
          { key: '/user/list', label: '用户列表', icon: <SolutionOutlined /> },
          { key: '/user/groups', label: '用户分组', icon: <CommentOutlined /> },
          { key: '/user/projects', label: '项目团队', icon: <ClusterOutlined /> },
          { key: '/user/scheduling', label: '人员排班', icon: <CalendarOutlined /> }
        ]
      },
      {
        key: '/system',
        label: '系统设置',
        icon: <SlidersOutlined />,
        children: [
          { key: '/system/role', label: '角色授权', icon: <IdcardOutlined /> },
          { key: '/system/menu', label: '菜单配置', icon: <SisternodeOutlined /> },
          { key: '/system/api', label: '接口配置', icon: <ApiOutlined /> },
          { key: '/system/setting', label: '通用设置', icon: <SettingOutlined /> }
        ]
      },
      {
        key: '/log',
        label: '日志审计',
        icon: <AuditOutlined />
      }
    ]
  },
  {
    key: 'group2',
    label: '附加功能',
    type: 'group',
    children: [
      {
        key: '/profile',
        label: '个人中心',
        icon: <CreditCardOutlined />
      },
      {
        key: '/template',
        label: '开发模板',
        icon: <HeartTwoTone />,
        children: [
          { key: '/template/button', label: '按钮' },
          { key: '/template/form', label: '表单' },
          { key: '/template/table', label: '表格' }
        ]
      },
      {
        key: '/help',
        label: '获取帮助',
        icon: <QuestionCircleOutlined />
      },
      {
        key: '/update',
        label: '版本更新',
        icon: <GithubOutlined />
      }
    ]
  }
];

// 切换主题
const SwitchTheme = () => {
  localStorage.setItem('customTheme', customTheme === 'dark' ? 'light' : 'dark');
  window.location.reload();
};

// 下拉菜单配置
const dropdownItems = [
  {
    key: '1',
    label: (
      <div className="s-trigger-menu">
        <Badge
          size="small"
          className="s-badge-gender"
          count={GenerateGenderBadge(1)}
          offset={[-5, 23]}
        >
          <Avatar className="s-trigger-menu__avatar" size={30} src={DefaultAvatar} />
        </Badge>
        <div className="s-trigger-menu__info">
          <div className="s-trigger-menu__name">吴彦祖</div>
          <div className="s-trigger-menu__desc">互联网不知名换皮工程师</div>
        </div>
      </div>
    )
  },
  {
    type: 'divider'
  },
  {
    key: 'profile',
    label: '个人中心',
    icon: <CreditCardOutlined />
  },
  {
    key: 'switchTheme',
    label: '切换主题',
    icon: <BgColorsOutlined />,
    onClick: SwitchTheme
  },
  {
    type: 'divider'
  },
  {
    key: 'logout',
    label: '注销登录',
    danger: true,
    icon: <LogoutOutlined />
  }
];

const siderThemeColor = {
  light: {
    primaryColor: '#000000',
    siderBg: '#f7f8f9',
    siderColor: '#000000',
    menu: {
      itemSelectedColor: '#0052d9'
    }
  },
  dark: {
    primaryColor: '#000000',
    siderBg: '#000000',
    siderColor: '#ffffff',
    menu: {
      itemSelectedColor: '#cc0033'
    }
  }
};

// Sider 单独主题定制，便于切换主题
const siderThemeConfig = {
  zeroRuntime: true,
  token: {},
  components: {
    Layout: {
      siderBg: siderThemeColor[customTheme].siderBg,
      triggerHeight: 60,
      triggerBg: 'transparent',
      triggerColor: siderThemeColor[customTheme].siderColor,
      lightTriggerBg: siderThemeColor[customTheme].siderBg,
      lightTriggerColor: siderThemeColor[customTheme].siderColor
    },
    Menu: {
      // 通用
      marginXS: 5,
      margin: 15,
      paddingXS: 5,
      padding: 15,
      itemHeight: 30,
      boxShadowSecondary: 'none',
      collapsedIconSize: 16,
      dropdownWidth: 100,
      subMenuItemSelectedColor: siderThemeColor[customTheme].siderColor,
      groupTitleLineHeight: '30px',
      itemActiveBg: 'transparent',
      // light 主题
      itemBg: siderThemeColor[customTheme].siderBg,
      itemColor: siderThemeColor[customTheme].siderColor,
      subMenuItemBg: siderThemeColor[customTheme].siderBg,
      itemSelectedBg: siderThemeColor[customTheme].siderBg,
      itemSelectedColor: siderThemeColor[customTheme].menu.itemSelectedColor,
      popupBg: siderThemeColor[customTheme].siderBg,
      // dark 主题
      darkItemBg: siderThemeColor[customTheme].siderBg,
      darkItemColor: siderThemeColor[customTheme].siderColor,
      darkSubMenuItemBg: siderThemeColor[customTheme].siderBg,
      darkItemSelectedBg: siderThemeColor[customTheme].siderBg,
      darkItemSelectedColor: siderThemeColor[customTheme].menu.itemSelectedColor,
      darkPopupBg: siderThemeColor[customTheme].siderBg
    }
  }
};

// 特殊样式
const logoStyle = {
  backgroundColor: siderThemeColor[customTheme].siderBg
};

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <ConfigProvider theme={siderThemeConfig}>
        <Sider
          className="s-sider"
          width={220}
          collapsedWidth={60}
          theme={customTheme}
          collapsible
          collapsed={collapsed}
          trigger={
            <div className="s-trigger">
              <Badge
                size="small"
                className="s-badge-gender"
                count={GenerateGenderBadge(1)}
                offset={[-6, 23]}
              >
                {collapsed ? (
                  <Dropdown
                    menu={{ className: 's-trigger__menu', items: dropdownItems }}
                    placement="rightBottom"
                  >
                    <Avatar className="s-trigger__avatar" size={30} src={DefaultAvatar} />
                  </Dropdown>
                ) : (
                  <Avatar className="s-trigger__avatar" size={30} src={DefaultAvatar} />
                )}
              </Badge>
              {!collapsed && (
                <>
                  <div className="s-trigger__info">
                    <div className="s-trigger__name">吴彦祖</div>
                    <div className="s-trigger__desc">互联网换皮工程师</div>
                  </div>
                  <Dropdown
                    menu={{ className: 's-trigger__menu', items: dropdownItems }}
                    placement="rightBottom"
                  >
                    <MoreOutlined style={{ cursor: 'pointer' }} />
                  </Dropdown>
                </>
              )}
            </div>
          }
        >
          <div className="s-logo" style={logoStyle}>
            <img
              src={collapsed ? LogoCollapsed : customTheme === 'dark' ? LogoWhite : LogoBlack}
              alt="logo"
            />
          </div>
          <Menu
            className="s-menu"
            theme={customTheme}
            // openKeys={['/alarm', '/alarm/history']}
            inlineIndent={25}
            mode="inline"
            items={menuItems}
          />
        </Sider>
      </ConfigProvider>
      <Layout>
        <Header className="s-header">
          <Button
            className="s-collapsed"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
        <Content className="s-content">Content</Content>
        <Footer className="s-footer">Footer</Footer>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;

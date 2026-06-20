import { createRoot } from 'react-dom/client';
import { ConfigProvider, App } from 'antd';

// 国际化
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
dayjs.locale('zh-cn');

// 样式
import 'antd/dist/antd.css';
import '@/assets/css/theme.less';

// 字体
import 'misans/lib/Normal/MiSans-Regular.min.css';

// 路由组件
import { BrowserRouter } from 'react-router-dom';
import { GenerateRoutes } from '@/router/rules';

// 主题定制
const themeConfig = {
  zeroRuntime: true,
  token: {
    fontFamily: 'MiSans, serif',
    fontSize: 13,
    borderRadius: 0,
    margin: 10,
    marginSM: 8,
    marginXS: 5,
    marginMD: 15,
    marginLG: 20,
    paddingXS: 5,
    paddingSM: 8,
    padding: 10,
    paddingMD: 15,
    paddingLG: 20,
    marginXL: 30,
    paddingXL: 30,
    marginXXL: 40
  },
  components: {
    Layout: {
      headerBg: '#ffffff',
      bodyBg: '#ffffff',
      footerBg: '#ffffff',
      footerPadding: 0,
      headerHeight: 60,
      headerPadding: '0 20px'
    }
  }
};

createRoot(document.getElementById('root')).render(
  <ConfigProvider locale={zhCN} theme={themeConfig}>
    <App>
      <BrowserRouter>
        <GenerateRoutes />
      </BrowserRouter>
    </App>
  </ConfigProvider>
);

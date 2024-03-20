import { Tag, Image } from 'ant-design-vue';
import style from './index.less';
import type { TableColumn } from '@/components/core/dynamic-table';
import { DeviceTypeEnum, ProductTypeEnum, enumToObjArr } from '@/enums/enum';
import { defaultSetting } from '@/store/modules/layoutSetting';
export const columns: TableColumn[] = [
  {
    title: '产品类型',
    align: 'center',
    fixed: 'left',
    width: 100,
    formItemProps: {
      component: 'RadioGroup',
      componentProps: {
        optionType: 'button',
        buttonStyle: 'solid',
        options: enumToObjArr(ProductTypeEnum),
      },
    },
    dataIndex: 'productType',
    customRender: ({ record }) => (
      <div>
        <Tag color="warning" key={record.productType}>
          {ProductTypeEnum.getEnumMessage(record.productType)}
        </Tag>
      </div>
    ),
  },
  {
    title: '设备类型',
    fixed: 'left',
    align: 'center',
    dataIndex: 'deviceType',
    formItemProps: {
      component: 'RadioGroup',
      componentProps: {
        optionType: 'button',
        buttonStyle: 'solid',
        options: enumToObjArr(DeviceTypeEnum),
      },
    },
    customRender: ({ record }) => (
      <div>
        <Tag icon={<TwitterOutlined />} color="warning" key={record.deviceType}>
          {DeviceTypeEnum.getEnumMessage(record.deviceType)}
        </Tag>
      </div>
    ),
  },
  {
    title: '客户端类型',
    fixed: 'left',
    align: 'center',
    dataIndex: 'appType',
  },
  {
    title: '版本名称',
    align: 'center',
    dataIndex: 'name',
  },
  {
    title: '版本号',
    hideInSearch: true,
    align: 'center',
    dataIndex: 'appVersion',
    customRender: ({ record }) => (
      <div>
        {record.skin_name?.split('|')?.map((name) => (
          <Tag color={'blue'} key={name}>
            {name}
          </Tag>
        ))}
      </div>
    ),
  },
  {
    title: 'SDK版本号',
    hideInSearch: true,
    align: 'center',
    dataIndex: 'appSdkVersion',
  },
  {
    title: '最小SDK版本号',
    align: 'center',
    hideInSearch: true,
    dataIndex: 'appSdkMinVersion',
  },
  {
    title: '是否强制更新',
    align: 'center',
    hideInSearch: true,
    dataIndex: 'forceUpdate',
  },
  {
    title: '是否审核中',
    align: 'center',
    hideInSearch: true,
    dataIndex: 'isUnderReview',
  },
  {
    title: '渠道',
    align: 'center',
    hideInSearch: true,
    dataIndex: 'channel',
  },
  {
    title: '创建时间',
    align: 'center',
    hideInSearch: true,
    dataIndex: 'createdDate',
  },
  {
    title: '操作',
    align: 'center',
    width: 120,
    dataIndex: 'ACTION',
    fixed: 'right',
    actions: ({ record }) => [
      {
        label: '查看详情',
        onClick: () => window.open(record.infourl),
      },
    ],
  },
];

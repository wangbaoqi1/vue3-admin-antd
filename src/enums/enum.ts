class EnumBaseClass {
  constructor(value, message) {
    this.value = value;
    this.message = message;
  }
}

const Enum = function (value, message) {
  return new EnumBaseClass(value, message);
};

class EnumClass {
  [x: string]: any;
  constructor(_object) {
    for (const _key in _object) {
      this[_key] = _object[_key];
    }
  }
  getEnumName(_value) {
    if (_value !== '') {
      for (const _key in this) {
        const _enum = this[_key];
        if (_value === _enum.value) {
          return _key;
        }
      }
    }
    return '';
  }
  getEnumMessage(_value) {
    if (_value !== '') {
      for (const _key in this) {
        const _enum = this[_key];
        if (_value === _enum.value) {
          return _enum.message;
        }
      }
    }
    return '';
  }
}

export const enumToObjArr = (enumObj) =>
  Object.values(enumObj).map((item: Record<any, string>) => ({
    value: item.value,
    label: item.message,
  }));
const ProductTypeEnum = new EnumClass({
  WLHY: Enum(1, '网络货运'),
  WCCY: Enum(2, '无船承运'),
});
const DeviceTypeEnum = new EnumClass({
  ANDROID: Enum(1, 'Android'),
  IOS: Enum(2, 'iOS'),
});
const AppTypeEnum = new EnumClass({
  VEHICLE_DRIVER: Enum(1, '网货司机端'),
  VEHICLE_BROKER: Enum(2, '网货车主端'),
  VEHICLE_BUSINESS: Enum(3, '网货货主端'),
  SHIP_OWNER: Enum(4, '船运船东端'),
  SHIP_BUSINESS: Enum(5, '船运货主端'),
  SHIP_BROKER: Enum(6, '船运船务端'),
});
const WlhyAppTypeEnum = new EnumClass({
  VEHICLE_DRIVER: Enum(1, '司机端'),
  VEHICLE_BROKER: Enum(2, '车主端'),
  VEHICLE_BUSINESS: Enum(3, '货主端'),
});
const WccyAppTypeEnum = new EnumClass({
  SHIP_OWNER: Enum(4, '船东端'),
  SHIP_BUSINESS: Enum(5, '货主端'),
  SHIP_BROKER: Enum(6, '船务端'),
});
const UserRegTypeEnum = new EnumClass({
  VEHICLE_DRIVER: Enum(1, '司机端'),
  VEHICLE_BROKER: Enum(2, '车主端'),
  VEHICLE_BUSINESS: Enum(3, '货主端'),
  SHIP_OWNER: Enum(4, '船东端'),
  SHIP_BUSINESS: Enum(5, '货主端'),
  SHIP_BROKER: Enum(6, '船务端'),
});
const UserAuthTypeEnum = new EnumClass({
  NONE: Enum(0, '未认证'),
  VEHICLE_DRIVER: Enum(1, '司机'),
  VEHICLE_BROKER: Enum(2, '车主'),
  VEHICLE_BUSINESS: Enum(3, '货主'),
  SHIP_OWNER: Enum(4, '船东'),
  SHIP_BUSINESS: Enum(5, '货主'),
  VEHICLE_CO_DRIVER: Enum(6, '副驾'),
  SHIP_BROKER: Enum(7, '船务'),
});
const PlateColorEnum = new EnumClass({
  BLUE: Enum('1', '蓝色'),
  YELLOW: Enum('2', '黄色'),
  CHARTREUSE: Enum('3', '黄绿色'),
});
const UserAuthStatusEnum = new EnumClass({
  NONE: Enum(0, '未认证'),
  UNDER_REVIEW: Enum(1, '认证中'),
  SUCCESS: Enum(2, '认证成功'),
  FAILURE: Enum(3, '认证失败'),
});
const CarAuthStatusEnum = new EnumClass({
  NONE: Enum(0, '未认证'),
  UNDER_REVIEW: Enum(1, '认证中'),
  SUCCESS: Enum(2, '认证成功'),
  FAILURE: Enum(3, '认证失败'),
});
const ShipAuthStatusEnum = new EnumClass({
  NONE: Enum(0, '未认证'),
  UNDER_REVIEW: Enum(1, '认证中'),
  SUCCESS: Enum(2, '认证成功'),
  FAILURE: Enum(3, '认证失败'),
});
const CarDrivingAuthStatusEnum = new EnumClass({
  NONE: Enum(0, '未认证'),
  UNDER_REVIEW: Enum(1, '认证中'),
  SUCCESS: Enum(2, '认证成功'),
  FAILURE: Enum(3, '认证失败'),
});
const LoginkBusinessProvinceEnum = new EnumClass({
  HUBEI: Enum(1, '湖北'),
  SHANXI: Enum(2, '山西'),
  ANHUI: Enum(3, '安徽'),
});
const LoginkBusinessTypeEnum = new EnumClass({
  LOGINK_CN_CREDIT_PERSON: Enum(1, '驾驶员信息单'),
  LOGINK_CN_CREDIT_VEHICLE: Enum(2, '车辆信息单'),
  LOGINK_CN_TRANSPORT_WAYBILL: Enum(3, '电子运单'),
  LOGINK_CN_FREIGHTCHARGES: Enum(4, '资金流水单'),
  LOGINK_CN_TRANSPORT_START_TRACK: Enum(5, '开始上传轨迹'),
  LOGINK_CN_TRANSPORT_END_TRACK: Enum(6, '结束上传轨迹'),
  LOGINK_CN_TRANSPORT_WAYBILL_YD1001: Enum(7, '电子运单一'),
  LOGINK_CN_TRANSPORT_WAYBILL_YD1002: Enum(8, '电子运单二'),
  LOGINK_CN_TRANSPORT_WAYBILL_YD1003: Enum(9, '电子运单三'),
});
const LoginkAuditStatusEnum = new EnumClass({
  NOT_ALLOW: Enum(0, '待审核'),
  APPROVED: Enum(1, '审核通过'),
  NO_PASS: Enum(2, '审核不通过'),
});
const LoginkUploadStatusEnum = new EnumClass({
  PENDING: Enum(0, '等待上报'),
  SUCCESS: Enum(1, '上报成功'),
  FAILURE: Enum(2, '上报失败'),
  UPLOADED: Enum(3, '数据已上报'),
});
const UserOrderTypeEnum = new EnumClass({
  MAJOR_BULKS: Enum(1, '大宗'),
  GENERAL_CARGO: Enum(2, '普货'),
});
const UserWeightTypeEnum = new EnumClass({
  LIGHT: Enum(1, '轻型'),
  HEAVY: Enum(2, '重型'),
});
const OrderTypeEnum = new EnumClass({
  BROADCAST: Enum(0, '广播单'),
  ASSIGN: Enum(1, '定向单'),
});
const OrderStatusEnum = new EnumClass({
  SHIPPING: Enum(0, '运输中'),
  CANCEL: Enum(1, '已取消'),
  EXPIRE: Enum(2, '已过期'),
  COMPLETE: Enum(3, '已完成'),
});
const VehicleOrderFreightReceiveEnum = new EnumClass({
  DRIVER: Enum(0, '司机收款'),
  BROKER: Enum(1, '车主收款'),
});
const ShipOrderFreightReceiveEnum = new EnumClass({
  SHIP_OWNER: Enum(0, '船东收款'),
  BROKER: Enum(1, '船务收款'),
});
const VehicleOrderDistanceTypeEnum = new EnumClass({
  LONG: Enum(0, '长途'),
  SHORT: Enum(1, '短途'),
});
const ShipOrderDistanceTypeEnum = new EnumClass({
  LONG: Enum(0, '长途'),
  SHORT: Enum(1, '短途'),
  SHIP_TO_SHIP: Enum(2, '过驳'),
});
const VehicleOrderServiceChargeTypeEnum = new EnumClass({
  NUM: Enum(1, '元/吨方件'),
  CHE: Enum(2, '元/车'),
});
const ShipOrderServiceChargeTypeEnum = new EnumClass({
  NUM: Enum(1, '元/吨方件'),
  CHE: Enum(2, '元/船'),
});
const OrdersCarrierTypeEnum = new EnumClass({
  DRIVER: Enum(1, '司机'),
  DRIVER_AND_BROKER: Enum(2, '司机和定向车主'),
});
const AccountTypeEnum = new EnumClass({
  DEMO_ACCOUNT: Enum(2, '演示账户'),
});
const CorpTypeEnum = new EnumClass({
  ZHEJIANG_YYCW: Enum(0, '一雨尘微'),
  HUBEI_PENGLU: Enum(1, '湖北鹏路'),
  SHANXI_NDWYBD: Enum(2, '山西你动'),
  ANHUI_PENGLU: Enum(3, '安徽鹏路'),
});
const UserFinanceAmountTypeEnum = new EnumClass({
  ORANGE_BANK_HUBEI: Enum(1, '平安银行湖北'),
  ORANGE_BANK_SHANXI: Enum(2, '平安银行山西'),
  ORANGE_BANK_ANHUI: Enum(3, '平安银行安徽'),
  getByAmountType(amountType) {
    if (UserFinanceAmountTypeEnum.ORANGE_BANK_HUBEI.value === amountType) {
      return 1;
    }
    if (UserFinanceAmountTypeEnum.ORANGE_BANK_SHANXI.value === amountType) {
      return 2;
    }
    if (UserFinanceAmountTypeEnum.ORANGE_BANK_ANHUI.value === amountType) {
      return 3;
    }
    return null;
  },
});
const UserFinanceBusinessSubjectEnum = new EnumClass({
  RECHARGE: Enum(1, '充值'),
  WITHDRAW: Enum(2, '提现'),
  WITHDRAW_REFUND: Enum(3, '提现退款'),
  LOCK: Enum(4, '冻结'),
  UN_LOCK: Enum(5, '冻结释放'),
  FEE: Enum(6, '附加运费'),
  FEE_REFUND: Enum(7, '附加运费退款'),
  COLLECT_OTHERS: Enum(10, '代收代付'),
  COLLECT_OTHERS_REFUND: Enum(11, '代收代付退款'),
  TRANSFER_INNER: Enum(12, '内部划转'),
  TRANSFER_RECHARGE: Enum(13, '充值余额划转'),
  ORDER_ITEM_PAYMENT: Enum(20, '运单运费'),
  ORDER_ITEM_PAYMENT_ADVANCE: Enum(21, '运单预付款'),
  ORDER_ITEM_PAYMENT_FEE: Enum(22, '运单服务费'),
  ORDER_ITEM_PAYMENT_REFUND: Enum(26, '运单结算退款'),
  ORDER_ITEM_TRANSFER: Enum(27, '运费转账'),
  CAR_LOCATION: Enum(30, '查询车辆定位'),
  REFUND: Enum(99, '平台退款'),
});
const FeeBusinessSubjectEnum = new EnumClass({
  FEE: Enum(1, '服务费'),
  REFUND: Enum(2, '退款'),
});
const DepositStatusEnum = new EnumClass({
  SUCCESS: Enum(1, '充值成功'),
  SUSPEND: Enum(2, '挂帐中'),
  SUSPEND_REGISTER: Enum(3, '挂帐登记到用户钱包'),
  SUSPEND_REGISTER_SETTLE_SUB_ACCT: Enum(4, '挂帐登记到自有结算账户'),
  SUSPEND_WITHDRAW_SETTLE_SUB_ACCT: Enum(5, '挂帐提现到自有结算账户'),
  SUCCESS_WITHDRAW_ACCT: Enum(9, '挂帐提现至来账账户'),
});
const OrderItemStatusEnum = new EnumClass({
  CREATE: Enum(0, '待装货'),
  SHIPPING: Enum(1, '运输中'),
  PENDING_RECEIVE: Enum(2, '待收货'),
  PENDING_PAYMENT: Enum(3, '待付款'),
  REJECTED: Enum(4, '已驳回'),
  EXPIRE: Enum(5, '已过期'),
  CANCEL: Enum(6, '已取消'),
  PAYMENT: Enum(7, '付款中'),
  COMPLETE: Enum(8, '已完成'),
});
const PaymentTypeEnum = new EnumClass({
  RECEIVE: Enum(0, '到货付'),
  DEFER: Enum(1, '延迟付'),
});
const FinalStatementStatusEnum = new EnumClass({
  CREATE: Enum(0, '已创建'),
  SUBMIT: Enum(1, '申请开票'),
  PASS: Enum(2, '已通过'),
  REJECTED: Enum(3, '已驳回'),
  COMPLETE: Enum(4, '开票完成'),
});
const InvoiceOrderItemStatusEnum = new EnumClass({
  RECEIVE: Enum(0, '待付款'),
  DEFER: Enum(1, '已完成'),
});
const DriverApplyTypeEnum = new EnumClass({
  AUDIT: Enum(0, '审核通过'),
  AUTO: Enum(1, '自动通过'),
});
const FreightTonTypeEnum = new EnumClass({
  ORIGINAL: Enum(0, '按原发数量'),
  CURRENT: Enum(1, '按实收数量'),
  MIN: Enum(2, '按原发或实收较小'),
  MAX: Enum(3, '按原发或实收较大'),
});
const FreightAccuracyTypeEnum = new EnumClass({
  CENT_ROUND_DOWN: Enum(0, '保留两位小数'),
  CENT_ROUND_HALF_UP: Enum(1, '四舍五入保留两位小数'),
});
const DeductTypeEnum = new EnumClass({
  NONE: Enum(0, '不抹零'),
  CENT: Enum(1, '保留小数点后两位'),
  ZERO: Enum(2, '保留整数'),
  TEN: Enum(3, '个位抹零'),
});
const OrderItemReceiveTypeEnum = new EnumClass({
  ONE: Enum(0, '只抢一次'),
  AGAIN: Enum(1, '连续抢单'),
});
const UserFinanceStatusEnum = new EnumClass({
  NORMAL: Enum(1, '正常'),
  LOCK: Enum(2, '冻结'),
  LOCK_WITHDRAW: Enum(3, '禁止提现'),
});
const PaymentCurrentEnum = new EnumClass({
  REFUND: Enum(0, '退款'),
  UNFREEZE: Enum(1, '解冻'),
  WITHDRAW: Enum(2, '提现'),
});
const PaymentAsyncEnum = new EnumClass({
  SUBMIT: Enum(0, '已提交'),
  PAYMENT: Enum(1, '支付中'),
  FAILURE: Enum(2, '支付失败(待退款)'),
  FAILURE_REFUND: Enum(3, '支付失败(已退款)'),
  SUCCESS: Enum(4, '支付成功'),
  SUCCESS_REFUND_SUBMIT: Enum(5, '支付成功(申请退款)'),
  SUCCESS_REFUND_PENDING: Enum(6, '支付成功(退款中)'),
  SUCCESS_REFUND_SUCCESS: Enum(7, '支付成功(退款完成)'),
});
const RejectDurationEnum = new EnumClass({
  UNLIMITED: Enum(0, '不驳回'),
  TEN_MINUTES_LATER: Enum(1, '10分钟后'),
  TWENTY_MINUTES_LATER: Enum(2, '20分钟后'),
  THIRTY_MINUTES_LATER: Enum(3, '半小时后'),
  ONE_HOUR_LATER: Enum(4, '1小时后'),
  TWO_HOUR_LATER: Enum(5, '2小时后'),
  SIX_HOUR_LATER: Enum(6, '6小时后'),
  LAST_MOMENT_TODAY: Enum(7, '今天24点'),
  LAST_MOMENT_TOMORROW: Enum(8, '明天24点'),
});
const BusinessTypeEnum = new EnumClass({
  NONE: Enum(0, '无'),
  PERSONAL: Enum(1, '个体'),
  COMPANY: Enum(2, '企业'),
});
const ContractCategoryEnum = new EnumClass({
  TRANSPORT_BUSINESS_FRAMEWORK_AGREEMENT: Enum(1, '运输业务框架合同'),
  TRANSPORT_BUSINESS_AGREEMENT: Enum(2, '运输合同'),
  OTHERS: Enum(99, '其他'),
});
const ESignContractCategoryEnum = new EnumClass({
  NONE: Enum(0, '未定义'),
  TRANSPORT_BUSINESS_FRAMEWORK: Enum(3, '运输业务框架合同'),
  ENTRUST_COLLECTION_AGREEMENT: Enum(4, '委托收款承诺函'),
  VEHICLE_ENTRUST_TRANSPORTATION_AGREEMENT: Enum(5, '承运合同（网货）'),
  DRIVER_CARRIER_AGREEMENT: Enum(6, '司机承运协议'),
  SHIP_ENTRUST_TRANSPORTATION_AGREEMENT: Enum(7, '承运合同（船运）'),
});
const ESignSignerTypeEnum = new EnumClass({
  PRIVATE: Enum(0, '个人'),
  PUBLIC: Enum(1, '企业'),
});
const ESignSignFlowStatusEnum = new EnumClass({
  DRAFT: Enum(0, '草稿'),
  UNDER_REVIEW: Enum(1, '签署中'),
  COMPLETE: Enum(2, '完成'),
  REVOKE: Enum(3, '撤销'),
  STOP: Enum(4, '终止'),
  EXPIRE: Enum(5, '过期'),
  REFUSE: Enum(7, '拒签'),
});
const ESIndicesTypeEnum = new EnumClass({
  VEHICLE_ORDERS: Enum(1, 'shw_vehicle_orders'),
  SHIP_ORDERS: Enum(2, 'shw_ship_orders'),
  PUB_PAY_BANK: Enum(9, 'shw_bank_branch'),
});
const TransportationTypeEnum = new EnumClass({
  VEHICLE: Enum(1, '陆运'),
  SHIP: Enum(2, '船运'),
});
const ComplianceFlagEnum = new EnumClass({
  YES: Enum(0, '符合'),
  NO: Enum(1, '不符合'),
});
const BankCardTypeEnum = new EnumClass({
  PRIVATE: Enum(1, '个人'),
  PUBLIC: Enum(2, '企业'),
});
const BankCardSourceEnum = new EnumClass({
  SYSTEM: Enum(0, '系统生成'),
  USER: Enum(1, '用户创建'),
});
const WithdrawInvoiceTypeEnum = new EnumClass({
  RECHARGE: Enum(1, '充值金额提现'),
  WITHDRAW: Enum(2, '提现金额提现'),
});
const VehicleOrderItemAuthStatusEnum = new EnumClass({
  NONE: Enum(0, '未审核'),
  APPROVED: Enum(1, '审核通过'),
  NO_PASS: Enum(2, '审核不通过'),
});
const VehicleOrderItemCallAuthStatusEnum = new EnumClass({
  NONE: Enum(0, '未取证'),
  APPROVED: Enum(1, '取证通过'),
  NO_PASS: Enum(2, '取证不通过'),
});
const VehicleOrderItemAuditLevelEnum = new EnumClass({
  FIRST: Enum(1, '一审'),
  SECOND: Enum(2, '二审'),
  THIRD: Enum(3, '三审'),
});
const VehicleOrderItemAuthTypeEnum = new EnumClass({
  FRONT_AUTH: Enum(0, '预审'),
  SECOND_AUTH: Enum(1, '复审'),
  FINAL_AUTH: Enum(2, '终审'),
});
const VehicleOrderItemCorrStatusEnum = new EnumClass({
  PENDING: Enum(0, '待调整'),
  COMPLETE: Enum(1, '已完成'),
});
const ShipOrderItemAuthStatusEnum = new EnumClass({
  NONE: Enum(0, '未审核'),
  APPROVED: Enum(1, '审核通过'),
  NO_PASS: Enum(2, '审核不通过'),
});
const ShipOrderItemCallAuthStatusEnum = new EnumClass({
  NONE: Enum(0, '未取证'),
  APPROVED: Enum(1, '取证通过'),
  NO_PASS: Enum(2, '取证不通过'),
});
const ShipOrderItemAuditLevelEnum = new EnumClass({
  FIRST: Enum(1, '一审'),
  SECOND: Enum(2, '二审'),
  THIRD: Enum(3, '三审'),
});
const ShipOrderItemAuthTypeEnum = new EnumClass({
  FRONT_AUTH: Enum(0, '预审'),
  SECOND_AUTH: Enum(1, '复审'),
  FINAL_AUTH: Enum(2, '终审'),
});
const ShipOrderItemCorrStatusEnum = new EnumClass({
  PENDING: Enum(0, '待调整'),
  COMPLETE: Enum(1, '已完成'),
});
const ZhiyunTrackStatusEnum = new EnumClass({
  NONE: Enum(0, '未查询'),
  HAS_DATA: Enum(1, '有轨迹'),
  NO_DATA: Enum(2, '无轨迹'),
});
const MyShipsTrackStatusEnum = new EnumClass({
  NONE: Enum(0, '未查询'),
  HAS_DATA: Enum(1, '有轨迹'),
  NO_DATA: Enum(2, '无轨迹'),
});
const VehicleCarRelationStatusEnum = new EnumClass({
  PENDING: Enum(0, '申请中'),
  APPROVED: Enum(1, '同意'),
  REJECT: Enum(2, '已拒绝'),
  REMOVE: Enum(3, '已解除'),
  COMPLETE: Enum(4, '已过期'),
});
const TaxinkStatusEnum = new EnumClass({
  PENDING: Enum(0, '等待上传'),
  SUCCESS: Enum(1, '上传成功'),
  FAILURE: Enum(2, '上传失败'),
  CANCEL: Enum(-1, '已撤销'),
});
const TaxinkMethodEnum = new EnumClass({
  METHOD_300101: Enum(1, '第一次上传'),
  METHOD_300102: Enum(2, '第二次上传'),
  METHOD_300103: Enum(3, '第三次上传'),
  METHOD_300110: Enum(4, '第一次补传'),
});
const InvoiceStatusEnum = new EnumClass({
  NONE: Enum(0, '无'),
  NORMAL: Enum(1, '正常'),
  RED_INK: Enum(2, '冲红'),
  VOID: Enum(3, '作废'),
});
const GradeUploadStatusEnum = new EnumClass({
  PENDING: Enum(0, '等待上报'),
  SUCCESS: Enum(1, '上报成功'),
  FAILURE: Enum(2, '上报失败'),
  UPLOADED: Enum(3, '数据已上报'),
});
const NonDataMaskingEnum = new EnumClass({
  ID_CARD: Enum('ID_CARD', '身份证不脱敏'),
  MOBILE_PHONE: Enum('MOBILE_PHONE', '手机号不脱敏'),
  BANK_CARD: Enum('BANK_CARD', '银行卡不脱敏'),
});
export {
  ProductTypeEnum,
  DeviceTypeEnum,
  AppTypeEnum,
  WlhyAppTypeEnum,
  WccyAppTypeEnum,
  UserRegTypeEnum,
  UserAuthTypeEnum,
  PlateColorEnum,
  UserAuthStatusEnum,
  CarAuthStatusEnum,
  ShipAuthStatusEnum,
  CarDrivingAuthStatusEnum,
  LoginkBusinessProvinceEnum,
  LoginkBusinessTypeEnum,
  LoginkAuditStatusEnum,
  LoginkUploadStatusEnum,
  UserOrderTypeEnum,
  UserWeightTypeEnum,
  OrderTypeEnum,
  OrderStatusEnum,
  VehicleOrderFreightReceiveEnum,
  ShipOrderFreightReceiveEnum,
  VehicleOrderDistanceTypeEnum,
  ShipOrderDistanceTypeEnum,
  VehicleOrderServiceChargeTypeEnum,
  ShipOrderServiceChargeTypeEnum,
  OrdersCarrierTypeEnum,
  AccountTypeEnum,
  CorpTypeEnum,
  UserFinanceAmountTypeEnum,
  OrderItemStatusEnum,
  FinalStatementStatusEnum,
  InvoiceOrderItemStatusEnum,
  PaymentTypeEnum,
  DriverApplyTypeEnum,
  FreightTonTypeEnum,
  FreightAccuracyTypeEnum,
  DeductTypeEnum,
  OrderItemReceiveTypeEnum,
  UserFinanceStatusEnum,
  UserFinanceBusinessSubjectEnum,
  FeeBusinessSubjectEnum,
  DepositStatusEnum,
  PaymentCurrentEnum,
  PaymentAsyncEnum,
  RejectDurationEnum,
  BusinessTypeEnum,
  ContractCategoryEnum,
  ESignContractCategoryEnum,
  ESignSignerTypeEnum,
  ESignSignFlowStatusEnum,
  ESIndicesTypeEnum,
  TransportationTypeEnum,
  ComplianceFlagEnum,
  BankCardTypeEnum,
  BankCardSourceEnum,
  WithdrawInvoiceTypeEnum,
  VehicleOrderItemAuthTypeEnum,
  VehicleOrderItemAuthStatusEnum,
  VehicleOrderItemCallAuthStatusEnum,
  VehicleOrderItemAuditLevelEnum,
  VehicleOrderItemCorrStatusEnum,
  ShipOrderItemAuthTypeEnum,
  ShipOrderItemAuthStatusEnum,
  ShipOrderItemCallAuthStatusEnum,
  ShipOrderItemAuditLevelEnum,
  ShipOrderItemCorrStatusEnum,
  ZhiyunTrackStatusEnum,
  MyShipsTrackStatusEnum,
  VehicleCarRelationStatusEnum,
  TaxinkStatusEnum,
  TaxinkMethodEnum,
  InvoiceStatusEnum,
  GradeUploadStatusEnum,
  NonDataMaskingEnum,
};

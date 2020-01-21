module.exports = {
  apiDomain: 'https://wcenter.aitectcare.com/healthcloud',
  mobileDomain: 'https://wcenter.aitectcare.com/mobile',
  webDomain: 'https://www.aitectcare.com',
  servicePhone: '01080698942',
  firstFlagKey: 'firstFlag',
  firstFloorKey: 'firstFloor',
  mapInfo: {
    latitude: 39.9543400000,
    longitude: 116.4616600000,
    scale: 28,
    name: '北京蛙鸣信息科技发展有限公司',
    address: '东三环北路甲2号京信大厦24层2421室'
  },
  shareTitle: "守护你的每一寸呼吸",
  showLoading() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 3000)
  }
}
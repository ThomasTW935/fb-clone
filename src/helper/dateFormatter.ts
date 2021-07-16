import moment, { MomentInput } from 'moment'

const dateFormatter = (date: MomentInput) => {
  const dateNow = moment()
  moment.updateLocale('en', {
    relativeTime: {
      s: '1m',
      ss: '1m',
      m: '%dm',
      mm: '%dm',
      h: '%dh',
      hh: '%dh',
      d: '%dd',
      dd: '%dd',
    },
  })

  if (dateNow.diff(date, 'days') <= 7) {
    return moment(date).fromNow(true)
  } else if (moment().get('month') === moment(date).get('month')) {
    return moment(date).format('MMMM D [at] h:mm A')
  } else if (moment().get('year') === moment(date).get('year')) {
    return moment(date).format('MMMM D')
  } else {
    return moment(date).format('MMMM D, YYYY')
  }
}

export { dateFormatter }

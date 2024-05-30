import { ICardProps, ITextStyle, IHeaderStyle } from './components/card/card';
import { Picture, generatePicture } from './components/picture/picture';

const defaultHeader: IHeaderStyle = {
  color: '#FFFFFF',
  fontFamily: 'Poppins',
  fontSize: 32,
  fontWeight: '600',
  lineHeight: '44px',
  letterSpacing: '0.5%',
}

const defaultDescription: ITextStyle = {
  color: '#FFFFFF',
  fontFamily: 'SF-Pro',
  fontSize: 16,
  fontWeight: '400',
  lineHeight: '24px',
  letterSpacing: 'normal',
}

const widthHeader: IHeaderStyle = {
  color: '#000000E5',
  fontFamily: 'Poppins',
  fontSize: 32,
  fontWeight: '600',
  lineHeight: '44px',
  letterSpacing: '0.5%',
  width: (window.matchMedia('(max-width: 827px)').matches ? '279px' : '760px'),
}

const widthDescription: ITextStyle = {
  color: '#000000E5',
  fontFamily: 'SF-Pro',
  fontSize: 16,
  fontWeight: '400',
  lineHeight: '24px',
  letterSpacing: 'normal',
  width: (window.matchMedia('(max-width: 827px)').matches ? '160px' : '465px'),
}

export const testBlueCard: ICardProps = {
  boxShadow: '0 14px 60px rgba(59, 59, 244, 0.3)',
  color: '#3B3BF5',
  radius: '12px',
  header: {
    text: 'Follow leading global markets',
    style: defaultHeader,
  },
  description: {
    text: 'Popular markets such as the S&P 500, the MSCI World of the FTSE 100',
    style: defaultDescription,
  },
  getPicture() {
    return (
      <div>
        {Picture(generatePicture('images/sp500.png'))}
      </div>
    )
  }
}

export const testMagentaCard: ICardProps = {
  boxShadow: '0 14px 60px rgba(254, 61, 154, 0.3)',
  color: '#FE3D9A',
  radius: '12px',
  header: {
    text: 'Earn 5.12% Money market funds',
    style: defaultHeader,
  },
  description: {
    text: 'Low-risk, flexible, easy-to-use funds, average interest rate 5.12%',
    style: defaultDescription,
  },
  eventClick() {
    window.open('https://en.wikipedia.org/wiki/Main_Page');
  },
  getPicture() {
    return (
      <div>
        {Picture(generatePicture('images/pounds.png'))}
      </div>
    )
  }
}

export const testWhiteCard: ICardProps = {
  flexGrow: 1,
  boxShadow: '0 14px 60px rgba(0, 51, 126, 0.1)',
  color: '#FFFFFF',
  radius: '12px',
  line: {
    color: '#3B3BF5',
    width: '8px',
  },
  header: {
    text: 'Portfolios built for you',
    style: widthHeader,
  },
  description: {
    text: 'Fill in our simple questionaire, and our investment managers will biuld and manage a low-cost portfolio that suits you',
    style: widthDescription,
  },
  getPicture() {
    return (
      <div>
        {Picture(generatePicture('images/round.png'))}
      </div>
    )
  }
}
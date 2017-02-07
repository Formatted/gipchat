const HeaderColor = '#B2D5EF';
const HeaderBackground = '#206396';
const DividerBroder = '#757575';
const MainBackground = '#80B3DA';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: HeaderColor,
    padding: 8,
  },
  root: {
    fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: 300,
  },
  header: {
    backgroundColor: HeaderBackground,
    color: HeaderColor,
    padding: '16px',
    fontSize: '1.5em',
  },
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: 'black',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: DividerBroder,
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: MainBackground,
  },
};

export default styles;

import { makeStyles } from '@material-ui/core/styles';

const SidebarMenuStyle = makeStyles(({ font, color }) => ({
  titleMenu: {
    marginLeft: ({ size }) => (size ? 30 : 38),
    fontFamily: font.robotoCon,
    fontWeight: 700,
    color: color.primary,
    fontSize: 18,
  },
  item: {
    display: 'flex',
    padding: '5px 20px',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  listItem: {
    fontFamily: font.robotoCon,

    '&.Mui-selected': {
      backgroundColor: `${color.primary}33`,
      color: color.brightOrange,

      '& .MuiListItemIcon-root': {
        color: color.brightOrange,
      },
    },
  },
}));

export default SidebarMenuStyle;

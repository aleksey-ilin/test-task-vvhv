import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import Carousel from '../containers/Carousel';
import styles from './Description.module.css';

export default class Events extends React.Component {
  state = { DetailedDescription: false };

  handleClickOpenDetailedDescription = () => this.setState({ DetailedDescription: true });

  handleCloseDetailedDescription = () => this.setState({ DetailedDescription: false });

  renderDetailedDescription() {
    const { activeEvent: { description } } = this.props;
    return (
      <div>
        <Dialog
          open={this.state.DetailedDescription}
          onClose={this.handleCloseDetailedDescription}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{description.title}</DialogTitle>
          <DialogContent>
          <Typography variant="body2" headlineMapping={{ body2: 'div' }} gutterBottom>
            <div dangerouslySetInnerHTML={{ __html: description.body_text }}
            />
          </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseDetailedDescription} color="primary" autoFocus>
              Закрыть
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  renderEmptyDescription = () => (
    <div className={styles.hint}>
      Нажмите на событие в списке, чтобы посмотреть его подробное описание.
    </div>
  );

  renderAddress = place => (
    <>
      <h3 className={styles.where}>Где?</h3>
      <div className={styles.place_title}>Место проведения: {place.title}</div>
      <div className={styles.place_address}>Адрес: {place.address}</div>
      <div className={styles.place_subway}>Ближайшее метро: {place.subway}</div>
    </>
  );

  renderEventDescription() {
    const { activeEvent: { description } } = this.props;
    const { place } = description;
    console.log(description);
    return (
      <>
        {this.renderDetailedDescription()}
        <Carousel />
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description.description }}
        />
        <p
          className={styles.detailed_description}
          onClick={this.handleClickOpenDetailedDescription}
        >
        (подробное описание события)
        </p>
        {place ? this.renderAddress(place) : null}
        <h3 className={styles.additional_information}>Дополнительная информация</h3>
        {description.price
          ? <div className={styles.price}>Стоимость: {description.price}</div>
          : null}
        {description.age_restriction
          ? <div className={styles.age_restriction}>
              Возрастное ограничение: {description.age_restriction}
            </div>
          : null}
      </>
    );
  }

  render() {
    const { activeEvent } = this.props;
    return (
      <Paper className={styles.root}>
        {activeEvent.description ? this.renderEventDescription() : this.renderEmptyDescription()}
      </Paper>
    );
  }
}

Events.propTypes = {
  activeEvent: PropTypes.object,
};

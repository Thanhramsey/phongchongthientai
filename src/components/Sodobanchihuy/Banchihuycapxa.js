import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Modal from "@mui/material/Modal";
import GridItemLogin from "components/Grid/GridItemLogin.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeadertab.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/components/sodobchStyle.js";
const useStyles = makeStyles(styles);

const Banchihuycapxa = React.memo(function Banchihuycapxa(props) {
  const classes = useStyles();
  const { test } = props;
  console.log(test);
  const [opennvcongan, setOpennvcongan] = React.useState(false);
  const [opennvsnn, setOpennvsnn] = React.useState(false);
  const handleClose = () => setOpennvcongan(false);
  const handleClose1 = () => setOpennvsnn(false);
  const gotonhiemvu = () => {
    console.log("");
  };
  const gotonhiemvuca = () => {
    setOpennvcongan(true);
  };
  const gotonhiemvusnn = () => {
    setOpennvsnn(true);
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={10} md={12}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.col_md_6}>
                <div className={classes.item_center}>
                  <a className={classes.img} onClick={gotonhiemvu}>
                    <h2 className={classes.title_h4_tv}>Thành phố Quy Nhơn</h2>
                    <h2 className={classes.title_h4_tv}>
                      Ban chỉ đạo Thành phố Quy Nhơn
                    </h2>
                  </a>
                </div>
              </div>
            </GridItem>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.col_md_6}>
                <div className={classes.item_center}>
                  <a className={classes.img} onClick={gotonhiemvusnn}>
                    <h2 className={classes.title_h4_tv}>Phường Lê lơi</h2>
                    <h2 className={classes.title_h4_tv}>
                      Ban chỉ đạo Phường Lê lơi
                    </h2>
                  </a>
                </div>
              </div>
            </GridItem>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.col_md_6}>
                <div className={classes.item_center}>
                  <a className={classes.img} onClick={gotonhiemvuca}>
                    <h2 className={classes.title_h4_tv}>Phường Tam Quan Bắc</h2>
                    <h2 className={classes.title_h4_tv}>
                      Ban chỉ đạo Phường Tam Quan Bắc
                    </h2>
                  </a>
                </div>
              </div>
            </GridItem>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.col_md_6}>
                <div className={classes.item_center}>
                  <a className={classes.img} onClick={gotonhiemvu}>
                    <h2 className={classes.title_h4_tv}>Phường Hoài Thanh</h2>
                    <h2 className={classes.title_h4_tv}>
                      Ban chỉ đạo Phường Hoài Thanh
                    </h2>
                  </a>
                </div>
              </div>
            </GridItem>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.col_md_6}>
                <div className={classes.item_center}>
                  <a className={classes.img} onClick={gotonhiemvusnn}>
                    <h2 className={classes.title_h4_tv}>Phường Tam Quan Nam</h2>
                    <h2 className={classes.title_h4_tv}>
                      Ban chỉ đạo Phường Tam Quan Nam
                    </h2>
                  </a>
                </div>
              </div>
            </GridItem>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.col_md_6}>
                <div className={classes.item_center}>
                  <a className={classes.img} onClick={gotonhiemvuca}>
                    <h2 className={classes.title_h4_tv}>Phường Đống Đa</h2>
                    <h2 className={classes.title_h4_tv}>
                      Ban chỉ đạo Phường Đống Đa
                    </h2>
                  </a>
                </div>
              </div>
            </GridItem>
          </GridItem>
        </GridContainer>
      </GridItem>
      <Modal
        open={opennvcongan}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <GridContainer>
            <GridItemLogin xs={12} sm={12} md={3}></GridItemLogin>
            <GridItemLogin xs={12} sm={12} md={6}>
              <Card>
                <CardHeader color="primary">
                  <h6
                    className={classes.cardTitleWhite}
                    style={{ marginTop: "-5px" }}
                  >
                    Nhiệm vụ - Thực hiện
                  </h6>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <table style={{ border: "1px" }}>
                        <thead>
                          <tr>
                            <th>Nhiệm vụ</th>
                            <th>Thực hiện</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ width: "50%" }}>
                              Chỉ đạo lực lượng công an tham gia sơ tán dân; bảo
                              vệ an ninh trật tự, tài sản của người dân cho vùng
                              sơ tán dân đi; sẵn sàng phương tiện và trang thiết
                              bị; phối hợp với Sở Giao thông vận tải và các địa
                              phương triển khai lực lượng hướng dẫn giao thông,
                              chốt chặn các tuyến đường và các khu vực nguy
                              hiểm; triển khai phương án phòng cháy, chữa cháy,
                              chú ý đến các khu vực trú đậu của tàu thuyền, khu
                              vực đã sơ tán nhân dân.
                            </td>
                            <td style={{ textAlign: "center" }}>
                              Đã thực hiện các nội dung được lãnh đạo phân giao
                              kịp thời
                              <a href="url"> Link chi tiết</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItemLogin>
            <GridItemLogin xs={12} sm={12} md={3}></GridItemLogin>
          </GridContainer>
        </div>
      </Modal>
      <Modal
        open={opennvsnn}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <GridContainer>
            <GridItemLogin xs={12} sm={12} md={3}></GridItemLogin>
            <GridItemLogin xs={12} sm={12} md={6}>
              <Card>
                <CardHeader color="primary">
                  <h6
                    className={classes.cardTitleWhite}
                    style={{ marginTop: "-5px" }}
                  >
                    Nhiệm vụ - Thực hiện
                  </h6>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <table style={{ border: "1px" }}>
                        <thead>
                          <tr>
                            <th>Nhiệm vụ</th>
                            <th>Thực hiện</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ width: "50%" }}>
                              Chỉ đạo hạ mực nước hồ chứa, điều tiết liên hồ
                              chứa để đón lũ; theo dõi mưa, mực nước trên các
                              sông; theo dõi tàu cá trên biển và vùng nguy hiểm
                              bão; theo dõi diễn biến tàu cá vào các khu neo đậu
                              cảng cá Quy Nhơn, Đề Gi và Tam Quan.
                            </td>
                            <td style={{ textAlign: "center" }}>
                              Đã thực hiện các nội dung được lãnh đạo phân giao
                              kịp thời
                              <a href="url"> Link chi tiết</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItemLogin>
            <GridItemLogin xs={12} sm={12} md={3}></GridItemLogin>
          </GridContainer>
        </div>
      </Modal>
    </GridContainer>
  );
});

Banchihuycapxa.propTypes = {
  test: PropTypes.string,
};
export default Banchihuycapxa;

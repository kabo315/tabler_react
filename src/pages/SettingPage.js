// @flow

import * as React from "react";

import { Page, Avatar, Header, Grid, Card, Form, Table, Alert, Progress, colors, Dropdown, Button, StampCard, StatsCard, ProgressCard, Badge, } from "tabler-react";

import C3Chart from "react-c3js";
import { Circle } from 'rc-progress'
import SiteWrapper from "./SiteWrapper.react";

export default class SettingPage extends React.Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <div style={{ color: 'primary' }}>
            Manage
          </div>
          <Grid.Row>
            <Grid.Col xl={4} lg={6} width={12}>
              <Card deck>
                <Card.Body>
                  <i className='fa fa-star card-star' />
                  <i className='fa fa-gear card-gear' />
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Avatar size={'lg'} imageURL={'/assets/imgs/user1.png'} />
                    <div style={{ paddingLeft: 20, margin: 'auto' }}>
                      <div>
                        <i className='fa fa-instagram' style={{ fontSize: 20, paddingRight: 10 }} />
                        <span>amy_world15</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ minWidth: 80, textAlign: 'left' }}>
                          <span className='growth-num'>1,217</span>
                          <span className='growth-diff diff-up'>6%</span>
                          <div>Followers</div>
                        </div>
                        <div style={{ minWidth: 80, textAlign: 'left' }}>
                          <span className='growth-num'>178</span>
                          <span className='growth-diff diff-up'>12%</span>
                          <div>Likes</div>
                        </div>
                        <div style={{ minWidth: 80, textAlign: 'left' }}>
                          <span className='growth-num'>32</span>
                          <span className='growth-diff diff-down'>2%</span>
                          <div>Comments</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr style={{ width: '100%', marginTop: 10 }} />

                </Card.Body>
              </Card>
              <Card deck title="Recent Activity">
                {/* <Card.Title>
                Recent Activity
              </Card.Title> */}
                <Card.Body>
                  <ul className="list-unstyled list-separated">
                    <li className="list-separated-item">
                      <Grid.Row className="align-items-center">
                        <Grid.Col auto>
                          <Avatar
                            size="md"
                            className="d-block"
                            imageURL="assets/imgs/user3.png"
                          />
                        </Grid.Col>
                        <Grid.Col>
                          <div>
                            <span>
                              {'Liked a photo based on Hashtag - ootd. '}
                              <small muted>
                                2 mins ago
                            </small>
                            </span>
                          </div>

                        </Grid.Col>
                        <Grid.Col auto>
                          <Dropdown
                            trigger={
                              <Dropdown.Trigger
                                icon="more-vertical"
                                toggle={false}
                              />
                            }
                            position="right"
                            items={
                              <React.Fragment>
                                <Dropdown.Item icon="tag">Action </Dropdown.Item>
                                <Dropdown.Item icon="edit-2">
                                  {" "}
                                  Another action{" "}
                                </Dropdown.Item>
                                <Dropdown.Item icon="message-square">
                                  {" "}
                                  Something else here
                              </Dropdown.Item>
                                <Dropdown.ItemDivider />
                                <Dropdown.Item icon="link">
                                  {" "}
                                  Separated link
                              </Dropdown.Item>
                              </React.Fragment>
                            }
                          />
                        </Grid.Col>
                      </Grid.Row>
                    </li>
                    <li className="list-separated-item">
                      <Grid.Row className="align-items-center">
                        <Grid.Col auto>
                          <Avatar
                            size="md"
                            className="d-block"
                            imageURL="assets/imgs/user7.png"
                          />
                        </Grid.Col>
                        <Grid.Col>
                          <div>
                            <span>
                              {'Liked a photo based on Hashtag - ootd. '}
                              <small muted>
                                2 mins ago
                            </small>
                            </span>
                          </div>

                        </Grid.Col>
                        <Grid.Col auto>
                          <Dropdown
                            trigger={
                              <Dropdown.Trigger
                                icon="more-vertical"
                                toggle={false}
                              />
                            }
                            position="right"
                            items={
                              <React.Fragment>
                                <Dropdown.Item icon="tag">Action </Dropdown.Item>
                                <Dropdown.Item icon="edit-2">
                                  {" "}
                                  Another action{" "}
                                </Dropdown.Item>
                                <Dropdown.Item icon="message-square">
                                  {" "}
                                  Something else here
                              </Dropdown.Item>
                                <Dropdown.ItemDivider />
                                <Dropdown.Item icon="link">
                                  {" "}
                                  Separated link
                              </Dropdown.Item>
                              </React.Fragment>
                            }
                          />
                        </Grid.Col>
                      </Grid.Row>
                    </li>
                    <li className="list-separated-item">
                      <Grid.Row className="align-items-center">
                        <Grid.Col auto>
                          <Avatar
                            size="md"
                            className="d-block"
                            imageURL="assets/imgs/user6.png"
                          />
                        </Grid.Col>
                        <Grid.Col>
                          <div>
                            <span>
                              {'Liked a photo based on Hashtag - ootd. '}
                              <small muted>
                                2 mins ago
                            </small>
                            </span>
                          </div>

                        </Grid.Col>
                        <Grid.Col auto>
                          <Dropdown
                            trigger={
                              <Dropdown.Trigger
                                icon="more-vertical"
                                toggle={false}
                              />
                            }
                            position="right"
                            items={
                              <React.Fragment>
                                <Dropdown.Item icon="tag">Action </Dropdown.Item>
                                <Dropdown.Item icon="edit-2">
                                  {" "}
                                  Another action{" "}
                                </Dropdown.Item>
                                <Dropdown.Item icon="message-square">
                                  {" "}
                                  Something else here
                              </Dropdown.Item>
                                <Dropdown.ItemDivider />
                                <Dropdown.Item icon="link">
                                  {" "}
                                  Separated link
                              </Dropdown.Item>
                              </React.Fragment>
                            }
                          />
                        </Grid.Col>
                      </Grid.Row>
                    </li>
                    <li className="list-separated-item">
                      <Grid.Row className="align-items-center">
                        <Grid.Col auto>
                          <Avatar
                            size="md"
                            className="d-block"
                            imageURL="assets/imgs/user5.png"
                          />
                        </Grid.Col>
                        <Grid.Col>
                          <div>
                            <span>
                              {'Liked a photo based on Hashtag - ootd. '}
                              <small muted>
                                2 mins ago
                            </small>
                            </span>
                          </div>

                        </Grid.Col>
                        <Grid.Col auto>
                          <Dropdown
                            trigger={
                              <Dropdown.Trigger
                                icon="more-vertical"
                                toggle={false}
                              />
                            }
                            position="right"
                            items={
                              <React.Fragment>
                                <Dropdown.Item icon="tag">Action </Dropdown.Item>
                                <Dropdown.Item icon="edit-2">
                                  {" "}
                                  Another action{" "}
                                </Dropdown.Item>
                                <Dropdown.Item icon="message-square">
                                  {" "}
                                  Something else here
                              </Dropdown.Item>
                                <Dropdown.ItemDivider />
                                <Dropdown.Item icon="link">
                                  {" "}
                                  Separated link
                              </Dropdown.Item>
                              </React.Fragment>
                            }
                          />
                        </Grid.Col>
                      </Grid.Row>
                    </li>
                  </ul>
                </Card.Body>
              </Card>

            </Grid.Col>
            <Grid.Col xl={8} lg={6} width={12}>
              <Alert type="success" isDismissible>
                <Header.H4>Notifications</Header.H4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.</p>
                <Button.List>
                  <Button color="success" RootComponent="button">Okay</Button>
                  <Button color="secondary" RootComponent="button">No, thanks</Button>
                </Button.List>
              </Alert>
              <Card title='Liking Speed'>
                <Card.Body>
                    <Form.Ratio
                      defaultValue={60}
                      max={100}
                      min={0}
                      step={1}
                    />
                </Card.Body>
              </Card>
            </Grid.Col>
          </Grid.Row>

        </Page.Content>
      </SiteWrapper>
    );
  }
}


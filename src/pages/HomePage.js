// @flow

import * as React from "react";

import { Page, Avatar, Icon, Grid, Card, Text, Table, Alert, Progress, colors, Dropdown, Button, StampCard, StatsCard, ProgressCard, Badge, } from "tabler-react";

import C3Chart from "react-c3js";
import { Circle } from 'rc-progress'
import SiteWrapper from "./SiteWrapper.react";

export default class HomePage extends React.Component {
  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <div style={{color:'primary'}}>
            Manage
          </div>
          <div style={{paddingBottom:10}}>
            <span style={{fontSize:24, color:'#646464', paddingRight:20}}>User Overview</span>
            <Button outline icon='plus' color='primary'>Add Instagram</Button>
            <span style={{textAlign:"right"}}>
            <i className='fe fe-list'/>
            <i className='fe fe-grid'/>
            </span>
            
          </div>
          <Grid.Row cards deck>
            <Grid.Col width={12}>
              <Card>
                <Table
                  responsive
                  highlightRowOnHover
                  hasOutline
                  verticalAlign="center"
                  cards
                  className="text-nowrap"
                >
                  <Table.Header>
                    <Table.Row>
                      <Table.ColHeader alignContent="center" className="w-1">
                        <i className="icon-people" />
                      </Table.ColHeader>
                      <Table.ColHeader>USER</Table.ColHeader>
                      <Table.ColHeader alignContent="center">
                        FEATURES
                      </Table.ColHeader>
                      <Table.ColHeader>GROWTH</Table.ColHeader>
                      <Table.ColHeader alignContent="center">LIKES GIVEN</Table.ColHeader>
                      <Table.ColHeader alignContent="center">
                        SPEED
                      </Table.ColHeader>
                      <Table.ColHeader>
                        ACTIVITY
                      </Table.ColHeader>
                      <Table.ColHeader alignContent="center">
                        <i className="icon-settings" />
                      </Table.ColHeader>
                      <Table.ColHeader alignContent="center">
                        <i className="icon-settings" />
                      </Table.ColHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Col alignContent="center">
                        <Avatar
                          imageURL="assets/imgs/user1.png"
                          className="d-block"
                          status="green"
                        />
                      </Table.Col>
                      <Table.Col>
                        <div>amy_world15</div>
                        <Text size="sm" muted>
                          Registered: Mar 19, 2018
                      </Text>
                      </Table.Col>
                      <Table.Col alignContent='center'>
                        <Badge color="primary" className='custom-badge'>Normal</Badge>
                      </Table.Col>
                      <Table.Col alignContent="center" className='growth-row'>
                        <div style={{minWidth:80, textAlign:'left'}}>
                          <span className='growth-num'>1,217</span>
                          <span className='growth-diff diff-up'>6%</span>
                          <div>Followers</div>
                        </div>
                        <div style={{minWidth:80, textAlign:'left'}}>
                          <span className='growth-num'>178</span>
                          <span className='growth-diff diff-up'>12%</span>
                          <div>Likes</div>
                        </div>
                        <div style={{minWidth:80, textAlign:'left'}}>
                          <span className='growth-num'>32</span>
                          <span className='growth-diff diff-down'>2%</span>
                          <div>Comments</div>
                        </div>
                      </Table.Col>
                      <Table.Col alignContent="center">
                        <div>144,423 / 189</div>
                      </Table.Col>
                      <Table.Col alignContent="center">
                        <div className='speed-donut'>60%</div>
                        <Circle percent="60" strokeWidth="8" trailWidth='8' strokeColor="#495056" trailColor='#BFC3CC' style={{ height: "3rem" }} />
                      </Table.Col>
                      <Table.Col>
                        <Text size="sm" muted>
                          Last Activity
                      </Text>
                        <div>4 minutes ago</div>
                      </Table.Col>
                      <Table.Col>
                        <i className='fa fa-star yellow-star' />
                      </Table.Col>
                      <Table.Col alignContent="center">
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
                                Another action{" "}
                              </Dropdown.Item>
                              <Dropdown.Item icon="message-square">
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
                      </Table.Col>
                    </Table.Row>
                    <Table.Row>
                      <Table.Col alignContent="center">
                        <Avatar
                          imageURL="./assets/imgs/user2.png"
                          className="d-block"
                          status="green"
                        />
                      </Table.Col>
                      <Table.Col>
                        <div>helenapark</div>
                        <Text size="sm" muted>
                          Registered: Mar 2, 2018
                      </Text>
                      </Table.Col>
                      <Table.Col alignContent='center'>
                        <Badge color="primary" className='custom-badge'>Normal</Badge>
                      </Table.Col>
                      <Table.Col alignContent="center" className='growth-row'>
                        <div style={{minWidth:80, textAlign:'left'}}>
                          <span className='growth-num'>1,217</span>
                          <span className='growth-diff diff-up'>6%</span>
                          <div>Followers</div>
                        </div>
                        <div style={{minWidth:80, textAlign:'left'}}>
                          <span className='growth-num'>178</span>
                          <span className='growth-diff diff-up'>12%</span>
                          <div>Likes</div>
                        </div>
                        <div style={{minWidth:80, textAlign:'left'}}>
                          <span className='growth-num'>32</span>
                          <span className='growth-diff diff-down'>2%</span>
                          <div>Comments</div>
                        </div>
                      </Table.Col>
                      <Table.Col alignContent="center">
                        <div>23 /23</div>
                      </Table.Col>
                      <Table.Col alignContent="center">
                        <div className='speed-donut'>60%</div>
                        <Circle percent="60" strokeWidth="8" trailWidth='8' strokeColor="#495056" trailColor='#BFC3CC' style={{ height: "3rem" }} />
                      </Table.Col>
                      <Table.Col>
                        <Text size="sm" muted>
                          Last Activity
                      </Text>
                        <div>5 minutes ago</div>
                      </Table.Col>
                      <Table.Col>
                        <i className='fa fa-star yellow-star' />
                      </Table.Col>
                      <Table.Col alignContent="center">
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
                                Another action{" "}
                              </Dropdown.Item>
                              <Dropdown.Item icon="message-square">
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
                      </Table.Col>
                    </Table.Row>
                    <Table.Row>
                      <Table.Col alignContent="center">
                        <Avatar
                          imageURL="assets/imgs/user3.png"
                          className="d-block"
                          status="green"
                        />
                      </Table.Col>
                      <Table.Col>
                        <div>gentlemennn</div>
                        <Text size="sm" muted>
                          Registered: Apr 7, 2018
                      </Text>
                      </Table.Col>
                      <Table.Col alignContent='center'>
                        <Badge color="danger" className='custom-badge'>Al Plus</Badge>
                      </Table.Col>
                      <Table.Col alignContent="center" className='growth-row'>
                        <div style={{minWidth:80, textAlign:'left'}}>
                          <span className='growth-num'>1,217</span>
                          <span className='growth-diff diff-up'>6%</span>
                          <div>Followers</div>
                        </div>
                        <div style={{minWidth:80, textAlign:'left'}}>
                          <span className='growth-num'>178</span>
                          <span className='growth-diff diff-up'>12%</span>
                          <div>Likes</div>
                        </div>
                        <div style={{minWidth:80, textAlign:'left'}}>
                          <span className='growth-num'>32</span>
                          <span className='growth-diff diff-down'>2%</span>
                          <div>Comments</div>
                        </div>
                      </Table.Col>
                      <Table.Col alignContent="center">

                        <div>422,100 / 581</div>
                      </Table.Col>
                      <Table.Col alignContent="center">
                        <div className='speed-donut'>96%</div>
                        <Circle percent="96" strokeWidth="8" trailWidth='8' strokeColor="#495056" trailColor='#BFC3CC' style={{ height: "3rem" }} />
                      </Table.Col>
                      <Table.Col>
                        <Text size="sm" muted>
                          Last Activity
                      </Text>
                        <div>a minute ago</div>
                      </Table.Col>
                      <Table.Col>
                        <i className='fa fa-star yellow-star' />
                      </Table.Col>
                      <Table.Col alignContent="center">
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
                                Another action{" "}
                              </Dropdown.Item>
                              <Dropdown.Item icon="message-square">
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
                      </Table.Col>
                    </Table.Row>
                    <Table.Row>
                      <Table.Col alignContent="center">
                        <Avatar
                          imageURL="assets/imgs/user4.png"
                          className="d-block"
                          status="green"
                        />
                      </Table.Col>
                      <Table.Col>
                        <div>Duglas Ray</div>
                        <Text size="sm" muted>
                          Registered: Jan 15, 2018
                      </Text>
                      </Table.Col>
                      <Table.Col alignContent='center'>
                        <Badge color="warning" className='custom-badge'>Premium</Badge>
                      </Table.Col>
                      <Table.Col alignContent="center" className='growth-row'>
                        <div style={{minWidth:80, textAlign:'left'}}>
                          <span className='growth-num'>1,217</span>
                          <span className='growth-diff diff-up'>6%</span>
                          <div>Followers</div>
                        </div>
                        <div style={{minWidth:80, textAlign:'left'}}>
                          <span className='growth-num'>178</span>
                          <span className='growth-diff diff-up'>12%</span>
                          <div>Likes</div>
                        </div>
                        <div style={{minWidth:80, textAlign:'left'}}>
                          <span className='growth-num'>32</span>
                          <span className='growth-diff diff-down'>2%</span>
                          <div>Comments</div>
                        </div>
                      </Table.Col>
                      <Table.Col alignContent="center">
                        <div>526 / 128</div>
                      </Table.Col>
                      <Table.Col alignContent="center">
                        <div className='speed-donut'>6%</div>
                        <Circle percent="6" strokeWidth="8" trailWidth='8' strokeColor="#495056" trailColor='#BFC3CC' style={{ height: "3rem" }} />
                      </Table.Col>
                      <Table.Col>
                        <Text size="sm" muted>
                          Last Activity
                      </Text>
                        <div>a minute ago</div>
                      </Table.Col>
                      <Table.Col>
                        <i className='fe fe-star yellow-star' />
                      </Table.Col>
                      <Table.Col alignContent="center">
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
                                Another action{" "}
                              </Dropdown.Item>
                              <Dropdown.Item icon="message-square">
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
                      </Table.Col>
                    </Table.Row>
                    <Table.Row>
                      <Table.Col alignContent="center">
                        <Avatar
                          imageURL="assets/imgs/user5.png"
                          className="d-block"
                          status="green"
                        />
                      </Table.Col>
                      <Table.Col>
                        <div>Teresa Reyes</div>
                        <Text size="sm" muted>
                          Registered: Mar 4, 2018
                      </Text>
                      </Table.Col>
                      <Table.Col alignContent='center'>
                        <Badge color="primary" className='custom-badge'>Normal</Badge>
                      </Table.Col>
                      <Table.Col alignContent="center" className='growth-row'>
                        <div style={{minWidth:80, textAlign:'left'}}>
                          <span className='growth-num'>1,217</span>
                          <span className='growth-diff diff-up'>6%</span>
                          <div>Followers</div>
                        </div>
                        <div style={{minWidth:80, textAlign:'left'}}>
                          <span className='growth-num'>178</span>
                          <span className='growth-diff diff-up'>12%</span>
                          <div>Likes</div>
                        </div>
                        <div style={{minWidth:80, textAlign:'left'}}>
                          <span className='growth-num'>32</span>
                          <span className='growth-diff diff-down'>2%</span>
                          <div>Comments</div>
                        </div>
                      </Table.Col>
                      <Table.Col alignContent="center">
                        <div>32,142 / 154</div>
                      </Table.Col>
                      <Table.Col alignContent="center">
                        <div className='speed-donut'>36%</div>
                        <Circle percent="36" strokeWidth="8" trailWidth='8' strokeColor="#495056" trailColor='#BFC3CC' style={{ height: "3rem" }} />
                      </Table.Col>
                      <Table.Col>
                        <Text size="sm" muted>
                          Last Activity
                      </Text>
                        <div>2 minutes ago</div>
                      </Table.Col>
                      <Table.Col>
                        <i className='fe fe-star yellow-star' />
                      </Table.Col>
                      <Table.Col alignContent="center">
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
                                Another action{" "}
                              </Dropdown.Item>
                              <Dropdown.Item icon="message-square">
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
                      </Table.Col>
                    </Table.Row>

                  </Table.Body>
                </Table>
              </Card>
            </Grid.Col>
          </Grid.Row>
        </Page.Content>
      </SiteWrapper>
    );
  }
}


import React, { Fragment } from 'react';
import HeaderLogged from "../../../components/header_logged";
import { Column, Section, Title, Container, Card } from "rbx";
import UserEditForm from '../../../components/user/user_edit_form';
import UsersEditFormPassword from '../../../components/user/user_edit_password_form';
import UserDelete from '../../../components/user/user_delete';
 
import "../../../styles/users.scss";

const UserEditScreen = () => (
  <Fragment>
    <HeaderLogged setIsOpen={false} link ={"/notes"} path={"Notes"} hidden={"open-button is-hidden"}/>
    <Section size="medium" className="editUser">
      <Container>
      <Column.Group centered >
          <Column size={3} >
            <Card className="users-edit">
              <Title size={6} className="has-text-grey has-text-centered">
                New Email and Name
              </Title>
              <Card.Content>
                
                <UserEditForm/>
                 
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
        <Column.Group centered >
          <Column size={3} >
            <Card className="users-edit">
              <Title size={6} className="has-text-grey has-text-centered">
                New Password
              </Title>
              <Card.Content>
                
                <UsersEditFormPassword/>
                 
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
        <Column.Group className="user-delete" centered>
          <Column size={3}>
                <Column.Group>
                  <Column size={12} className="has-text-centered">
                
                  <UserDelete />
                    
                  </Column>
                </Column.Group>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </Fragment>
);

export default UserEditScreen;
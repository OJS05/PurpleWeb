import React, {useState} from 'react';
import "./Apply.css";
import {Alert, Button, Container, Form} from 'react-bootstrap';
import {gql, useMutation} from "@apollo/client";

const INSERT_APPLICATION = gql`
    mutation InsertApplication($age: Int!, $reason: String!, $username: String!, $discordId: BigInt!) {
        insert_applications(objects: {age: $age, checked: false, reason: $reason, username: $username, discord_id: $discordId}) {
            affected_rows
        }
    }
`;

function Apply(props) {
    const [insertApplication, {data, loading, error}] = useMutation(INSERT_APPLICATION);
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(null);
    const [reason, setReason] = useState("");
    const [discordId, setDiscordId] = useState(null);

    const [alert, setAlert] = useState(null);

    const validateInputs = () => {
        const usernameIsValid = usernameValid();
        const ageIsValid = ageValid();
        const reasonIsValid = reasonValid();
        const idIsValid = idValid();
        return !!(ageIsValid && reasonIsValid && usernameIsValid && idIsValid);
    };

    const usernameValid = () => {
        const length = username.length;
        return length >= 3 && length <= 16;
    };

    const idValid = () => {
        const length = discordId.length;
        return length == 18;
    }

    const ageValid = () => {
        const parsedAge = parseInt(age);

        if (isNaN(parsedAge)) {
            return false;
        }

        return parsedAge >= 16;
    };

    const reasonValid = () => {
        return reason.length !== 0;
    };

    const handleSubmission = () => {
        if (validateInputs()) {
            // Submit application and show success alert.
            insertApplication({variables: {age: age, reason: reason, username: username}});
            setAlert(<Alert className={"submit-alert"} variant="success">Application submitted!</Alert>);
        } else {
            // Show error alert.
            setAlert(<Alert className={"submit-alert"} variant="danger">Please fill out all fields.</Alert>);
        }
    };

    return (
        <div className="apply">
            <div className={"submit-alert"}>
                {alert}
            </div>
            <Container>
                <Form
                    validated={validateInputs()}>
                    <Form.Group>
                        <Form.Label>Minecraft Username</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter your username"
                                      onChange={event => setUsername(event.target.value)}
                                      isValid={usernameValid()}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Discord ID</Form.Label>
                        <Form.Control type="number"
                                      placeholder="To get your id please join the Discord server."
                                      onChange={event => setDiscordId(event.target.value)}
                                      isValid={idValid()}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number"
                                      placeholder="Enter your age"
                                      onChange={event => setAge(event.target.value)}
                                      isValid={ageValid()}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Reasons to join Purple</Form.Label>
                        <Form.Control as="textarea"
                                      rows="5"
                                      onChange={event => setReason(event.target.value)}
                                      isValid={reasonValid()}/>
                    </Form.Group>
                </Form>
                <Button type='submit' className='btn btn-primary btn-block' onClick={handleSubmission}>Submit</Button>
            </Container>
        </div>
    );
}

export default Apply;

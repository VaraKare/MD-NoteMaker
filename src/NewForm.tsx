import { FormEvent, useRef } from "react"
import { Button, Col, Form, FormGroup, Row, Stack } from "react-bootstrap"
import { Link } from "react-router-dom"
import CreatableReactSelect from "react-select/creatable"
import { NoteData } from "./App"

type NoteFormProps = {
    onSubmit: (data : NoteData) => void
}

function NewForm({onSubmit}: NoteFormProps) {
    const titleRef = useRef<HTMLInputElement>(null)
    const markdownRef = useRef<HTMLTextAreaElement>(null)

    function HandleSubmit(e: FormEvent){
        e.preventDefault()
        onSubmit({
            title:titleRef.current!.value,
            markdown: markdownRef.current!.value,
            tags: []
        })
    }
  return (
    <Form onSubmit={HandleSubmit}>
        <Stack gap={4}>
            <Row>
                <Col>
                <FormGroup controlId = "title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control ref={titleRef} required/>
                </FormGroup>
                </Col>
                <Col>
                <FormGroup controlId = "tags">
                    <Form.Label>Tags</Form.Label>
                    <CreatableReactSelect isMulti/>
                </FormGroup>
                </Col>
                <Row>
                <FormGroup controlId = "markdown">
                    <Form.Label className="mt-4">Body</Form.Label>
                    <Form.Control ref={markdownRef} required as="textarea" rows={15}/>
                </FormGroup>
                <Stack className=" p-4 justify-content-end " gap={2} direction ="horizontal">
                    <Button type="submit" variant="primary">Save</Button>
                    <Link to="..">
                    <Button type ="button" variant="outline-secondary">Cancel</Button>
                    </Link>
                </Stack>
                </Row>
            </Row>
        </Stack>
    </Form>
  )
}

export default NewForm
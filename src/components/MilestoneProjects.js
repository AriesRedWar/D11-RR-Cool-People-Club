import Carousel from 'react-bootstrap/Carousel'

export default function MilestoneProjects() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='/Philips Milestone project.png'
                    alt="Snake game"
                />
                <Carousel.Caption>
                    <h3>Snake-Eat More Dots by Philip</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='/tara1.jpeg'
                    alt="Trivia Game"
                />

                <Carousel.Caption>
                    <h3>Let's Play: Trivia by Shetara</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Tito_screenshot.png"
                    alt="Horror game"
                />
                <Carousel.Caption>
                    <h3>Horror Movie Trivia by Tito</h3>
                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Milestone Project.png"
                    alt="Snake gane"
                />
                <Carousel.Caption>
                    <h3>Snake Game by Brandon</h3>
                </Carousel.Caption>

            </Carousel.Item>
        </Carousel>
    );
}

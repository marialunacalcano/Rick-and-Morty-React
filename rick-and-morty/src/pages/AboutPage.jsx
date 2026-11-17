import Card from 'react-bootstrap/Card'

function AboutPage() {
  return (
    <Card body className="m-4">
      <h2>About the Show</h2>
      <p>
        Rick and Morty is an animated science-fiction comedy that first aired in 2013.
        It follows Rick, a brilliant but reckless scientist, and his grandson Morty
        on adventures across the multiverse.
      </p>
      <ul>
        <li>Created by Justin Roiland and Dan Harmon</li>
        <li>Network: Adult Swim</li>
        <li>Genre: animated sci-fi comedy</li>
      </ul>
    </Card>
  )
}

export default AboutPage
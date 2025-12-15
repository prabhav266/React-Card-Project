import Card from './components/Card'

const App = () => {

  const jobs = [
  {
    id: 1,
    brandLogo: "https://imgs.search.brave.com/5LNl0CPq9asXCy5Ke5QAwpRPvgjVG27gUseHaXzUrc0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzMvQW1h/em9uLUxvZ28tVHJh/bnNwYXJlbnQtUE5H/LnBuZw",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: '$120',
    location: "Mumbai, India",
  },
  {
    id: 2,
    brandLogo: "https://imgs.search.brave.com/bZPY5KFGckvtEdvVeXVU518z-eAJvyopsZh3m6v-_Zc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/ODYxLzY0Ny9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1iYWNrZ3JvdW5k/LWZyZWUtcG5nLnBu/Zw",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: '$150',
    location: "Bangalore, India",
  },
  {
    id: 3,
    brandLogo: "https://imgs.search.brave.com/vIXMhvwrO1IvlI6AQJuo5B3QGgHq-FwDpSg4OxlD_54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "UX Researcher",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: '$140',
    location: "Remote",
  },
  {
    id: 4,
    brandLogo: "https://imgs.search.brave.com/bG-xPD1-pu6r_82Ng7Quwo5_-vgop94F01k_siJATSY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTcv/Mzk2LzgxNC9zbWFs/bC9uZXRmbGl4LW1v/YmlsZS1hcHBsaWNh/dGlvbi1sb2dvLWZy/ZWUtcG5nLnBuZw",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Product UI Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '$180',
    location: "Los Angeles, USA",
  },
  {
    id: 5,
    brandLogo: "https://imgs.search.brave.com/DzF429iIjcgfhk0pJCKDMQYDLonOYkei9DZ_3Yl8s8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8xOC8xOC80MC9h/cHBsZS1sb2dvLTc0/NjM3OTVfNjQwLnBu/Zw",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "Human Interface Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: '$110',
    location: "Cupertino, USA",
  },
  {
    id: 6,
    brandLogo: "https://imgs.search.brave.com/HOsu_Xp5ZmWdcqfm1dQYqJ9-HSe8NfsCIJ85rCauOlc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjgv/MzM5Lzk2Mi9zbWFs/bC9taWNyb3NvZnQt/aWNvbi1sb2dvLXN5/bWJvbC1mcmVlLXBu/Zy5wbmc",
    companyName: "Microsoft",
    datePosted: "12 hours ago",
    post: "UX Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: '$135',
    location: "Hyderabad, India",
  },
  {
    id: 7,
    brandLogo: "https://imgs.search.brave.com/OEp3NdOsjSOJJ97S0tGCVCZYoJf6sgnOGHlCCXvXQhQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2RubG9nby5j/b20vbG9nb3Mvcy85/OS9zdHJpcGVfdGh1/bWIucG5n",
    companyName: "Stripe",
    datePosted: "4 days ago",
    post: "Product Designer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: '$160',
    location: "Remote",
  },
  {
    id: 8,
    brandLogo: "https://imgs.search.brave.com/RT4ShWh71VbnVbWB5jGq2q7MqvhakCoMmcNYq7tKRDI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDYv/NjQyLzE5OS9zbWFs/bC9zcG90aWZ5LWlj/b24tc3BvdGlmeS1s/b2dvLXNwb3RpZnkt/c3ltYm9sLWxvZ28t/c2V0LWZyZWUtdmVj/dG9yLmpwZw",
    companyName: "Spotify",
    datePosted: "2 weeks ago",
    post: "Design Systems Lead",
    tag1: "Full Time",
    tag2: "Lead",
    pay: '$170',
    location: "Stockholm, Sweden",
  },
  {
    id: 9,
    brandLogo: "https://imgs.search.brave.com/T5HE0uAi0zXg2Rf45GC-AJV0ZtPuKaBi3aOjNmRiIaE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvQWRv/YmUtTG9nby1QTkct/UGljdHVyZS5wbmc",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: '$130',
    location: "Noida, India",
  },
  {
    id: 10,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LinkedIn_logo.svg",
    companyName: "LinkedIn",
    datePosted: "8 hours ago",
    post: "Junior Product Designer",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: '$60',
    location: "San Francisco, USA",
  },
];

  return (
    <div className="parent">
      {jobs.map(function(elem,id){
        return <div key={id}>
          <Card brandLogo = {elem.brandLogo} company = {elem.companyName} 
          datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} 
          tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
        </div>
      })}
    </div>
  )
}

export default App
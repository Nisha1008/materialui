import React from 'react'
import Layout from '../components/layout/Layout'
import { Typography, Box } from '@mui/material'

const About = () => {
    return (
        <Layout>
            <Box sx={{
                my: 15,
                p: 2,
                textAlign: "center",
                "& h4": {
                    fontWeight: 'bold',
                    my: 2,
                    fontSize: '2rem',
                },
                "& p": {
                    textAlign: 'justify',
                },
                "@media(max-width:600px)": {
                    mt: 0,
                    "& h4": {
                        fontSize: "1.3rem",
                    }
                }
            }}>
                <Typography variant="h4">Welcome To My Resturant</Typography>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto molestias esse dolor possimus, ducimus sunt harum, obcaecati, assumenda doloribus temporibus eligendi expedita consequuntur magni quisquam. Dolorum eius eum laudantium quod reprehenderit neque sed suscipit ad non explicabo est magnam quos ut debitis, tempora nemo natus consequuntur vero. Rerum impedit molestiae necessitatibus, possimus, culpa facere, alias deserunt ex maiores quasi fugiat blanditiis dolorem vel quas sequi nisi? Aut tempora quas veniam reiciendis ea nesciunt dolores saepe fugit corporis asperiores. Maxime, architecto nihil ex natus nemo necessitatibus doloremque atque doloribus sint et magni facere illo a cumque beatae tenetur, dicta hic repudiandae.</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus alias nisi omnis minima veritatis possimus, eius vel optio excepturi sunt, blanditiis fuga laborum veniam accusantium commodi. Cupiditate est labore at, tempore nobis voluptas, fugit sint nemo distinctio accusantium aliquam aliquid id numquam? Nesciunt illo distinctio quod ad id! Molestiae incidunt fugiat quaerat. Laboriosam corporis numquam magnam nostrum doloremque sequi reprehenderit explicabo rerum doloribus in! Sequi ipsa inventore nisi repellendus. Corrupti, reiciendis totam dolorem atque quisquam distinctio praesentium! Dolore minima molestiae, dolorem libero velit alias sapiente eos asperiores temporibus aperiam nesciunt nihil sit sequi? Dolores maxime officia cum quos assumenda!</p>
            </Box>

        </Layout>
    )
}

export default About

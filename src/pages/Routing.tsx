import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import Draw from '../components/Draw';

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Draw />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sint minima? Sed incidunt non soluta labore? Molestiae iusto facilis, reiciendis culpa repellendus vitae distinctio modi similique, quo quaerat ad beatae aliquam qui voluptatibus atque dolorem odit quos nisi voluptatum error perferendis dolor praesentium, iure quisquam? Ut voluptas impedit ducimus. Facilis iusto, eos ab quia optio, temporibus dolorum consequuntur eaque debitis, repellendus fugit. Enim sint numquam eligendi iure distinctio et tempore quam voluptatum. Neque facere amet doloribus ut et, aspernatur sed quos tenetur, deserunt ducimus officiis hic eaque? Praesentium, nulla laboriosam ea dolor maxime doloribus veniam iusto, expedita voluptatum est possimus exercitationem autem unde magnam tempora adipisci sed quasi, beatae placeat ullam. Ipsam ducimus dolor quia fugit expedita voluptas recusandae, praesentium deserunt deleniti nobis unde odit assumenda doloremque id sunt. Modi, sed aperiam! Quidem blanditiis illo asperiores, nesciunt, eveniet id animi magnam hic maiores quibusdam, nisi voluptates necessitatibus pariatur? Commodi sapiente enim harum labore doloribus, dolorum vitae eveniet officia beatae nesciunt. Aut, culpa ipsum consequatur dolores aliquid dolorem dolor expedita, officiis nobis iusto cumque? Perspiciatis at tempore numquam ipsum mollitia! Hic voluptas dolorem dicta nam, inventore officia, quis labore ut quibusdam corporis eaque earum eligendi consequatur provident quia iusto optio molestias neque obcaecati rem ipsa, praesentium facilis omnis! Ab voluptatum, similique non voluptate adipisci maxime reprehenderit necessitatibus enim nobis excepturi accusantium libero saepe quaerat dolorem, neque suscipit sapiente eius et magni mollitia assumenda voluptas omnis quod maiores? Modi aliquid eligendi in sunt dicta blanditiis accusantium provident odit voluptates, est ipsa dignissimos fugiat a laborum qui repudiandae corrupti veniam, eos dolores ut. Animi neque quos est enim, earum officia, blanditiis harum cupiditate quibusdam corrupti unde sequi distinctio? Atque quidem cumque eveniet aliquid deserunt itaque amet debitis dignissimos vel incidunt? Magni, omnis ipsa voluptatum dolor veniam soluta natus laboriosam rerum. Voluptas corporis reprehenderit recusandae consequatur hic libero officiis, magnam culpa non laboriosam suscipit voluptatem. Optio accusamus ipsam molestias error provident. Dolores, quos. Aliquam, corrupti? Voluptatem veniam optio illo dolores in corporis quia excepturi libero at expedita!

                        </h2>
                    } />
                </Route>
            </Routes>
        </Router>
    )
}

export default Routing
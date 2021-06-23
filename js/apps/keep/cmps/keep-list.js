import keepPreview from './keep-preview.js'

export default {
    props: ['notes'],
    template: `
    <section class="keep-list">
        <ul>
            <li v-for="currNote in notes" :key="currNote.id">
                <keep-previeew :note="currNote" />
            </li>
        </ul>


    </section>
    
    `,
    components: {
        keepPreview,
    },
}
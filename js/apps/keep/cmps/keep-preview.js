export default {
    props: ['note'],
    template: `
    <section class="keep-preview">
       <!-- <component :is="note.type" :is="note" class="note-content" /> -->
       {{note.info.text}}
    </section>
    
    `,


}
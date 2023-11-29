<script>
    import ButtonSecondary from './atoms/buttonSecondary.svelte';
</script>

<a href="#skip">
    <h2 class="medium">We acknowledge all First Peoples of this land and celebrate their enduring connections to Country, knowledge and stories. We pay our respects to Elders and Ancestors who watch over us and guide Aboriginal and Torres Strait Islander community.</h2>
    <p>Proceed</p>
</a>

<style>
    a {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--black-100);
        color: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: var(--padding);
        box-sizing: border-box;
    }
    h2 {
        max-width: 50ch;
        text-align: center;
        margin-bottom: 16px;
    }
    p {
        position: absolute;
        bottom: calc(var(--padding)*3);
        opacity: 0.5;
        transition: opacity 0.2s ease;
    }
    p:hover {
        opacity: 1;
    }

</style>
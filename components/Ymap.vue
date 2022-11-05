<template>
    <client-only>
        <div class="map-container">
            <yandex-map 
                :coords="coords"
                :zoom="12" 
            >
                <ymap-marker 
                :coords="coords" 
                marker-id="123" 
                hint-content="some hint" 
                />
            </yandex-map>
        </div>
    </client-only>
</template>

<script>
export default {
    data() {
        return {
            coords: [
                44.82896654088406,
                39.831893822753904,
            ],
        }
    },
    computed: {
    },
    methods: {
        onClick(e) {
            this.coords = e.get('coords');
        },
    },
}
</script>

<style lang="scss" scoped>
    .map-container {
        position: relative;
    }
    .ymap-container {
        margin-top: 20px;
        margin-bottom: 20px;
        height: 40vw;
        max-height: 500px;
        border-radius: 16px;
        overflow: hidden;
    }

    @include md {
        .ymap-container {
            height: 50vw;
        }
    }

    @include sm {
        .ymap-container {
            height: 66vw;
        }
    }

    @include xs {
        .ymap-container {
            height: 60vw;
            margin-bottom: 0;
        }
        .map-container {
            margin-bottom: 60px;
        }
    }
</style>
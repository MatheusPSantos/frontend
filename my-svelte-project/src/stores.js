import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "Ut consequat gravida justo, condimentum fermentum metus semper eu. Proin consectetur ligula eu mi porta porta. Nulla auctor metus eu nisl vulputate posuere. Sed tempor dictum mollis. Nam eleifend turpis id posuere fermentum. Etiam purus est, aliquam nec mattis ullamcorper, porttitor eget neque. Duis gravida massa ac neque euismod, a hendrerit nisi tempus. Maecenas.",
    },
    {
        id: 2,
        rating: 5,
        text: "Aliquam posuere finibus est. Vivamus ut nisi congue, interdum libero eget, fringilla magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus mattis, imperdiet est rhoncus, molestie ex. Suspendisse laoreet, lectus quis porttitor interdum, odio erat facilisis erat, in scelerisque enim velit eget velit.",
    },
    {
        id: 3,
        rating: 8.76,
        text: "Vestibulum interdum nunc lorem, nec ultrices metus dignissim a. Proin interdum bibendum molestie. Phasellus elementum molestie porttitor. Proin ac tristique mauris, ac lacinia erat. Proin ac libero odio. Morbi fermentum malesuada varius. Maecenas interdum sed nibh id consectetur. Aliquam erat volutpat. Etiam orci nulla, tincidunt eget ante sit amet, vulputate hendrerit diam. Nullam iaculis erat libero, vel vestibulum dui accumsan id. Maecenas a orci imperdiet, tristique dolor quis, laoreet nunc. Duis ut sollicitudin est. Nullam tristique varius mauris nec dignissim. Duis vitae magna nec ante dictum ultrices. Vivamus nec elit non augue convallis auctor. Integer eget quam erat.",
    },
]
);
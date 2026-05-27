<template>
    <v-container fluid>
        <v-row>
            <v-col 
                v-for="eachPiece in adminInfo"
            cols="12">
                <div>
                    <h3>{{ eachPiece.sectionheader }}</h3>
                    <hr />
                    <p>{{ eachPiece.sectionBody }}</p>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">

const adminInfo = [
    {
                department: 'General-Info',
        sectionheader: 'General Info',
        sectionBody: 'For many of our shorter trips, all you will need is appropriate footwear, sunscreen, your bathing suit and possibly a long sleeve non-cotton shirt for sun protection and/or warmth. If you would like to bring other items, you are welcome to, but please be sure that your items can secure in the raft to help cut down on the chance of litter in our beautiful rivers. IRIE Rafting Company provides all of the required personal gear you will need on the river such as personal flotation devices (PFDs), helmets and paddles. As well as wetsuits and splash jackets when applicable at no extra cost. Below are complete packing lists for all our trips.',
    },
    {
        department: 'Helpful-Tips',
        sectionheader: 'Your Stuff',
        sectionBody: 'Most guests find it helpful to bring a small backpack or tote bag to carry personal items onto the shuttle vehicle.  This will allow you to manage personal items such as towels, change of clothes, sunscreen, snacks, wallets, etc. These items may be safely left on the shuttle vehicle while you are rafting.',
    },
    {
                department: 'Helpful-Tips',
        sectionheader: 'Pictures & Videos',
        sectionBody: 'We discourage bringing any type of phone or camera on the raft. Even if they are waterproof, they do not float. I you do have one on the trip, the use of the it must not interfere with your ability to listen to your guide and paddle the raft.  We will not be responsible for the safety of such items. Pictures will be taken of your raft at certain points on most rivers and are available for purchase through an outside provider.',
    },
    {
                department: 'Helpful-Tips',
        sectionheader: 'Dry Clothing',
        sectionBody: 'Bring dry clothing and shoes for after the trip and plastic bags to carry wet things (not nessesary). For Truckee trips, it is best to wait until you get back to the office to change, but on trips that are further away, it is nice to change before the van ride. Also, bring spares of anything you need to get home such as keys, glasses or contacts.',
    },
    {
        department: 'Helpful-Tips',
        sectionHeader: 'What Not To Wear',
        sectionBody: 'Cotton is not ideal for rafting as it will not keep you warm or dry out once it is wet! Denim jeans and heavy cotton are never appropriate on the river as the fabric retains water and loses insulation. Also avoid anything that may hamper your movement in the water like long dresses, baggy pants or large shoes/boots.'
    },
    {
        department: 'Helpful-Tips',
        sectionHeader: 'What Not to Bring',
        sectionBody: 'Please do not bring pets, valuables such as jewelry, expensive sunglasses or cameras, and try not to bring too much gear. Drivers stay with shuttle vehicles while you are on the river and we have never had issues with theft, however, we are not responsible for damage or the loss/theft of any personal gear from our vehicles, on the river or in camp. So please travel light, and have travel insurance or household insurance that covers your property when away from home'
    },
    {
        department: 'Helpful-Tips',
        sectionHeader: 'Summer Preparation',
        sectionBody: 'During the summer, your main concern will be sun protection. We highly recommend that you bring waterproof sunscreen with a high SPF, or a non-cotton sun shirt. You also can bring sunglasses but they should have some sort of tether or strap to keep them on your body should you go in the river. You can bring a baseball cap and wear it under your helmet if you would like the added shade. We have sunscreen and sunglass retaining straps for sale in our office if you forget.'
    }
]

</script>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
} from "@ionic/vue";
import Psalm from "../components/Psalm.vue";
import Hymn from "../components/Hymn.vue";
import MarianAntiphon from "@/components/MarianAntiphon.vue";
</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Compline</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="section">
        <p><span class="red">℣.</span> O Lord, grant a blessing.</p>
        <p>
          <span class="rubric">Blessing.</span> <span class="red">✠</span> The
          Lord Almighty grant us a quiet night a perfect end.
        </p>
        <p><span class="red">℟.</span> Amen.</p>
      </div>

      <div class="section">
        <h6 class="rubric">Short Lesson: 1 Pet 5:8</h6>
        <p>
          <span class="first-letter">B</span>RETHEREN: Be sober, be vigilant,
          because your adversary the devil, as a roaring lion, walketh about,
          seeking whom he may devour:* whom resist, steadfast in the faith. But
          thou, O Lord, have mercy upon us.
        </p>
        <p><span class="red">℟.</span> Thanks be to God.</p>
        <p>
          <span class="red">℣.</span> <span class="red">✠</span> Our help is in
          the Name of the Lord.
        </p>
        <p><span class="red">℟.</span> Who hath made heaven and earth.</p>
      </div>

      <div class="section">
        <h6 class="rubric">
          The Our Father is said secretly, followed by the Confiteor:
        </h6>
        <p>
          <span class="first-letter">I</span> CONFESS to God Almighty, to
          blessed Mary ever Virgin, to blessed Michael the Archangel, to blessed
          John the Baptist, to the Holy Apostles Peter and Paul, and to all the
          Saints, that I have sinned exceedingly in thought, word, and deed:
          <span class="rubric">(here strike the breast three times)</span> by my
          fault, by my own fault, by my own most grievous fault. Wherefore I beg
          blessed Mary ever virgin, blessed Michael the Archangel, blessed John
          the Baptist, the holy Apostles Peter and Paul, and all the Saints, to
          pray for me to the Lord our God.
        </p>
        <p>
          <span class="red">℣.</span> Almighty God have mercy upon us, forgive
          us our sins, and bring us to everlasting life.
        </p>
        <p><span class="red">℟.</span> Amen</p>
        <p>
          <span class="red">℣.</span> The Almighty and merciful Lord
          <span class="red">✠</span> grant us pardon, absolution, and remission
          of our sins.
        </p>
        <p><span class="red">℟.</span> Amen.</p>
      </div>

      <div class="section">
        <p><span class="red">℣.</span> Turn us then, O God our Savior.</p>
        <p><span class="red">℟.</span> And let thine anger cease from us.</p>
        <p>
          <span class="red">℣.</span> <span class="red">✠</span> O God, make
          speed to save me.
        </p>
        <p><span class="red">℟.</span> O Lord, make haste to help me.</p>
        <p>
          <span class="red">℣.</span> <span class="rubric">(Bow)</span> Glory be
          to the Father, and to the Son, and to the Holy Ghost.
        </p>
        <p>
          <span class="red">℟.</span> As it was in the beginning, is now and
          ever shall be, world without end. Amen. Alleluia.
        </p>
      </div>

      <Psalm id="4" />
      <Psalm id="91" />
      <Psalm id="134" />

      <Hymn id="compline" />

      <div class="section">
        <h6 class="rubric">Chapter: Jer. 14:9</h6>
        <p>
          <span class="first-letter">T</span>HOU, O Lord, art in the midst of
          us, and we are called by thy Name: leave us not, O Lord our God.
        </p>
        <p><span class="red">℟.</span> Thanks be to God.</p>
      </div>

      <div class="section">
        <p>
          <span class="red">℣.</span> Keep us, O Lord, as the apple of an eye.
          <span class="rubric">(P.T. </span>Alleluia.<span class="rubric"
            >)</span
          >
        </p>
        <p>
          <span class="red">℟.</span> Hide us under the shadow of thy wings.
          <span class="rubric">(P.T. </span>Alleluia.<span class="rubric"
            >)</span
          >
        </p>
        <p><span class="red">℣.</span> Lord, have mercy upon us.</p>
        <p><span class="red">℟.</span> Christ, have mercy upon us.</p>
        <p><span class="red">℣.</span> Lord, have mercy upon us.</p>
        <p class="rubric">The Our Father is said secretly, until:</p>
        <p><span class="red">℣.</span> And lead us not into temptation.</p>
        <p><span class="red">℟.</span> But deliver us from evil.</p>
      </div>

      <div class="section">
        <h6 class="rubric">
          The Preces below is said unless it be a Double or an Octave, otherwise
          skip to "O Lord, hear my prayer". The Apostles Creed is said secretly
          until:
        </h6>
        <p><span class="red">℣.</span> The Resurrection of the body.</p>
        <p><span class="red">℟.</span> And the Life everlasting. Amen.</p>
        <p><span class="red">℣.</span> Vouchsafe, O Lord, this night.</p>
        <p><span class="red">℟.</span> To keep us without sin.</p>
        <p><span class="red">℣.</span> O Lord, here my prayer.</p>
        <p><span class="red">℟.</span> And let my cry come unto thee.</p>
        <p><span class="red">℣.</span> Let us pray.</p>
      </div>

      <div class="section">
        <p class="rubric">Collect</p>
        <p>
          <span class="first-letter">V</span>ISIT, we beseech thee, O Lord, this
          habitation, and drive far from it all snares of the enemy: let thy
          holy Angels dwell herein to preserve us in peace, and let thy blessing
          be ever upon us. Through Jesus Christ, Our Lord, who with thee, in the
          unity of the Holy Ghost, liveth and reigneth ever one God, world
          without end.
        </p>
        <p><span class="red">℟.</span> Amen.</p>
      </div>

      <div class="section">
        <p><span class="red">℣.</span> O Lord, here my prayer.</p>
        <p><span class="red">℟.</span> And let my cry come unto thee.</p>
        <p><span class="red">℣.</span> Let us bless the Lord.</p>
        <p><span class="red">℟.</span> Thanks be to God.</p>
        <p>
          <span class="rubric">Blessing.</span> The Almighty and merciful Lord,
          <span class="red">✠</span> the Father, the Son, and the Holy Ghost,
          bless and preserve us.
        </p>
        <p><span class="red">℟.</span> Amen.</p>
      </div>

      <MarianAntiphon />

      <div class="section">
        <p>
          <span class="red">℣.</span> <span class="red">✠</span> May the divine
          help remain with us always.
        </p>
        <p><span class="red">℟.</span> Amen.</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
@import "../theme/office-common.css";
</style>

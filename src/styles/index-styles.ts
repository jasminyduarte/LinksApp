import { StyleSheet } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { colors } from "@/styles/colors"

 export const styles = StyleSheet.create({
  title: {
    color: colors.green[900],
    fontSize: 20
  },
  container: {
    flex: 1,
    paddingTop: 62,
  },
  header: {
    paddingHorizontal: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    width: 38,
    height: 32,
  },
  links: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
  },
  linksContent: {
    gap: 20,
    padding: 24,
    paddingBottom: 100,
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modalContent: {
    backgroundColor: colors.gray[900],
    borderTopWidth: 1,
    borderTopColor: colors.gray[800],
    paddingBottom: 32,
    padding: 24,
  },
  modalHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  modalTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.gray[400],
  },
  modalLinkName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[200],
  },
  modalLinkUrl: {
    fontSize: 14,
    color: colors.gray[400],
    marginBottom: 16,
  },
  modalOptions: {
    flexDirection: 'row',
    marginTop: 32,
    width: '100%',
    borderTopWidth: 1,
    justifyContent: 'space-between',
    borderTopColor: colors.gray[600],
    paddingVertical: 14,
  }
})